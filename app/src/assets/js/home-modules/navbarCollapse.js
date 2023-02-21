const $targetEl = document.getElementById('targetEl');
const $triggerEl = document.getElementById('triggerEl');
const options = {
  onCollapse: () => {},
  onExpand: () => {},
  onToggle: () => {},
};

const collapse = new Collapse($targetEl, $triggerEl, options);
