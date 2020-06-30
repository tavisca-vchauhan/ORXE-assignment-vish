import { html, customElement, LitElement, property } from 'lit-element';
import styles from './style-css';
import { styleMap } from 'lit-html/directives/style-map';
import { classMap } from 'lit-html/directives/class-map';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {

    @property({ type: String, reflect: true })
    label = 'Rating';

    @property({ type: Number, reflect: true })

    _rating: number = 0;

    private progress(): Record<string, string> {
        const showProgress = {};
        if (this._rating > 100) {
            showProgress['width'] = '100%';
        } else if (this._rating < 0) {
            showProgress['width'] = '0%';
        } else {
            showProgress['width'] = this._rating + '%';
        }
        return showProgress;
    }

    getRating(): number {
        if (!this._rating || this._rating < 0 || this._rating > 10) {
            return 0;
        }
        return Math.floor(this._rating) / 10;
    }

    render() {
        this._rating = this.getRating();
        return html`
      <div aria-hidden="true" id="linear" class="linear-track">
        <div
          id="linearBar"
          style=${styleMap(this.progress())}
          class="${classMap({
                'linear-bar__indicator': true,
                'linear-bar--bad': this._rating >= 1 && this._rating < 3,
                'linear-bar--poor': this._rating >= 3 && this._rating < 5,
                'linear-bar--average': this._rating >= 5 && this._rating < 7,
                'linear-bar--great': this._rating >= 7 && this._rating < 8.5,
                'linear-bar--excellent': this._rating >= 8.5
            })}"></div>    
      </div>
      <div class="ratingData">
        <span data-testid="ratingLabel">${this.label}</span>
        <span data-testid="ratingValue">${this._rating}</span>
      </div>
    `;
    }

    static styles = styles;

}
