class NavMenuActions {
  YCoord = 0;
  scrolled = false;

  get container() {
    return document.getElementById("scroll-container");
  }

  save = () => {
    if (!this.scrolled || !this.container) {
      return;
    }
    this.YCoord = this.container.scrollTop;
  };

  restore = () => {
    this.container?.scrollTo(0, this.YCoord);
  };

  scrollToId = (DOMId: string, margin: number) => {
    if (this.scrolled) {
      return;
    }
    const scrollingElem = document
      .getElementById(DOMId)
      ?.getBoundingClientRect();

    const promise = new Promise<void>(res => {
      if (scrollingElem && this.container) {
        this.container.scrollBy({
          top: scrollingElem.top - margin,
          behavior: "smooth"
        });
        this.scrolled = true;
      }
      setTimeout(() => res(), 2000);
    });
    promise.then(() => this.save());
  };
}

export const navMenuActions = new NavMenuActions();
