import { OrxeRatingBar } from '../index';

describe('orxe-rating-bar', () => {

    let orxeRatingComponent;

    beforeEach(async function () {
        OrxeRatingBar;
        orxeRatingComponent = document.createElement('orxe-rating-bar') as OrxeRatingBar;
        await document.body.append(orxeRatingComponent);
    });

    afterEach(async function () {
        await orxeRatingComponent.remove();
    });

    async function setProperties(properties: object): Promise<void> {
        for (const property in properties) {
            if (orxeRatingComponent.hasOwnProperty(property)) {
                orxeRatingComponent[property] = properties[property];
            }
        }
        await orxeRatingComponent.requestUpdate();
    }

    it('should check default values of properties', () => {
        expect(orxeRatingComponent.rating).toEqual(0);
        expect(orxeRatingComponent.label).toEqual('Rating');
    });

    it('check value of rating for rating component', async () => {
        await setProperties({ rating: 90 });
        const ratingValue = orxeRatingComponent.shadowRoot!.querySelector(`.ratingValue`) as HTMLElement;
        expect(ratingValue).toHaveTextContent('9');
    });

    it('check Progress for rating component', async () => {
        await setProperties({ rating: 80 });
        const linearTrack = orxeRatingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
        expect(linearTrack).toHaveStyle({ width: '80%' });
    });

    it('check Progress if rating is less than zero', async () => {
        await setProperties({ rating: -10 });
        const linearTrack = orxeRatingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
        expect(linearTrack).toHaveStyle({ width: '0%' });
    });

    it('check Progress if rating is greater than 100', async () => {
        await setProperties({ rating: 110 });
        const linearTrack = orxeRatingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
        expect(linearTrack).toHaveStyle({ width: '100%' });
    });

    it('check label for rating component', async () => {
        await setProperties({ label: 'test' });
        const linearTrack = orxeRatingComponent.shadowRoot!.querySelector(`.ratingLabel`) as HTMLElement;
        expect(linearTrack).toHaveTextContent('test');
    });

});