document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContentItems = document.querySelectorAll('.tab-content-item');

    function selectItem(e) {
        console.log('selectItem called'); // Para depuración
        removeBorder();
        removeShow();
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        tabContentItem.classList.add('show');
    }

    function removeBorder() {
        console.log('removeBorder called'); // Para depuración
        tabItems.forEach(item => {
            item.classList.remove('tab-border');
        });
    }

    function removeShow() {
        console.log('removeShow called'); // Para depuración
        tabContentItems.forEach(item => {
            item.classList.remove('show');
        });
    }

    tabItems.forEach(item => {
        item.addEventListener('click', selectItem);
    });
});

