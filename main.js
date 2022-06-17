import "./style.css";
/*

class ReactiveList {
  constructor(list, isChild = false) {
    this.element = list;
    this.isChild = isChild;
    this.initList();
  }
  initList() {
    this.element.querySelectorAll("li").forEach((item) => {
      new ReactiveListItem(item, this);
    });
    if (this.isChild) {
      this.element.classList.add("child");
      this.element.classList.add("hidden");
      this.element.classList.add("right");
    }
  }
}
class ReactiveListItem {
  constructor(item, parent) {
    this.item = item;
    this.parent = parent;
    this.trigger = item.querySelector("a");
    this.isParent = this.item.querySelector("ul") !== null;
    this.child = null;
    this.initItem();
  }
  initItem() {
    if (this.isParent) {
      this.child = new ReactiveList(this.item.querySelector("ul"), true);
    }
    this.handleClick();
  }
  handleClick() {
    this.trigger.addEventListener("click", () => {
      if (this.isParent) {
        this.parent.element.classList.add("hidden");
        this.parent.element.classList.add("left");
        this.child.element.classList.remove("hidden");
        this.child.element.classList.remove("right");
      } else {
        console.log("gotopage");
      }
    });
  }
}
*/

class ReactiveList {
  constructor(link) {
    this.element = link;
    this.back = this.element.dataset.back == "";
    this.target = document.getElementById(link.getAttribute("data-target"));
    this.handleEvent();
  }
  handleEvent() {
    this.element.addEventListener("click", () => {
      if (this.back) {
        this.target.classList.remove("left");
        this.element.closest("ul").classList.add("right");
      } else {
        this.target.classList.add("show");
        this.target.classList.remove("right");
        this.element.closest("ul").classList.add("left");
      }
    });
  }
}

document.querySelectorAll("[data-target]").forEach((link) => {
  new ReactiveList(link);
});
