class Typewriter {
    private element: HTMLElement;
    private text: string;
    private speed: number;
    private index: number = 0;
    private callback?: () => void;
  
    constructor(elementId: string, text: string, speed: number = 100, callback?: () => void) {
      const el = document.getElementById(elementId);
      if (!el) throw new Error(`Element with ID '${elementId}' not found.`);
      this.element = el;
      this.text = text;
      this.speed = speed;
      this.callback = callback;
    }
  
    public startTyping(): void {
      this.type();
    }
  
    private type(): void {
      if (this.index < this.text.length) {
        this.element.textContent += this.text.charAt(this.index);
        this.index++;
        setTimeout(() => this.type(), this.speed);
      } else if (this.callback) {
        setTimeout(() => this.callback!(), 500);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const line1 = new Typewriter("line1", "Hi, I’m", 100, () => {
      const line2 = new Typewriter("line2", "Maqhawe Dube", 100, () => {
        const line3 = new Typewriter("line3", "A Software Developer", 100);
        line3.startTyping();
      });
      line2.startTyping();
    });
    line1.startTyping();
  });
  