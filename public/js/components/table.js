// Table selection handling
document.addEventListener('DOMContentLoaded', function () {
	const table = document.getElementById('order_table');
	const bulkActionsContainer = document.getElementById('bulk-actions-container');
	const selectedCountText = document.getElementById('selected-items-count');
	const checkAll = document.getElementById('order_check_all');
	const checkboxes = document.querySelectorAll('[data-slot="single-checkbox"]');

	// Initially hide bulk actions
	if (bulkActionsContainer) {
		bulkActionsContainer.setAttribute('data-visible', 'false');
	}

	// Function to update bulk actions visibility and count
	function updateBulkActions() {
		const selectedCheckboxes = document.querySelectorAll('[data-slot="single-checkbox"]:checked');
		const selectedCount = selectedCheckboxes.length;

		if (selectedCount > 0) {
			bulkActionsContainer.setAttribute('data-visible', 'true');
			selectedCountText.textContent = `${selectedCount} items selected`;
		} else {
			bulkActionsContainer.setAttribute('data-visible', 'false');
		}
	}

	// Handle "Check All" checkbox
	if (checkAll) {
		checkAll.addEventListener('change', function () {
			checkboxes.forEach(checkbox => {
				checkbox.checked = this.checked;
			});
			updateBulkActions();
		});
	}

	// Handle individual checkboxes
	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('change', function () {
			// Update "Check All" state
			if (checkAll) {
				checkAll.checked = [...checkboxes].every(cb => cb.checked);
				checkAll.indeterminate = [...checkboxes].some(cb => cb.checked) && !checkAll.checked;
			}
			updateBulkActions();
		});
	});

	// Handle unselect button
	const unselectButton = document.getElementById('bulk-unselect');
	if (unselectButton) {
		unselectButton.addEventListener('click', function () {
			checkboxes.forEach(checkbox => {
				checkbox.checked = false;
			});
			if (checkAll) {
				checkAll.checked = false;
				checkAll.indeterminate = false;
			}
			updateBulkActions();
		});
	}

	// Handle sort buttons
	const sortButtons = document.querySelectorAll('[data-sort-key]');
	let activeButton = null;

	sortButtons.forEach(button => {
		const icon = button.querySelector('[data-sort-icon]');

		button.addEventListener('click', function () {
			const sortKey = this.dataset.sortKey;

			// If clicking a different button
			if (activeButton && activeButton !== this) {
				// Reset previous active button
				activeButton.setAttribute('data-active', 'false');
				activeButton.dataset.direction = 'asc';
				activeButton = null;
			}

			// Toggle active state
			const wasActive = this.getAttribute('data-active') === 'true';

			if (wasActive) {
				// Toggle sort direction
				const currentDirection = this.dataset.direction || 'asc';
				this.dataset.direction = currentDirection === 'asc' ? 'desc' : 'asc';
				this.setAttribute('data-direction', this.dataset.direction);
			} else {
				// Activate the button
				this.setAttribute('data-active', 'true');
				this.dataset.direction = 'asc';
				this.setAttribute('data-direction', 'asc');
				activeButton = this;
			}

			// Here you would add your sorting logic based on sortKey and direction
			console.log(`Sorting by ${sortKey} in ${this.dataset.direction} order`);
		});
	});
}); 