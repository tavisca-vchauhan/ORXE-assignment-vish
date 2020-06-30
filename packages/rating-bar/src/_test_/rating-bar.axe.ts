import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
import { OrxeRatingBar } from '../index';

expect.extend(toHaveNoViolations);

let orxeRatingComponent;

beforeEach(async function () {
    OrxeRatingBar;
    orxeRatingComponent = document.createElement('orxe-rating-bar') as OrxeRatingBar;
    await document.body.append(orxeRatingComponent);
});

afterEach(async function () {
    await orxeRatingComponent.remove();
});

it('should support all WCAG Accessibility Rules', async () => {
    const result = await axe(orxeRatingComponent);
    expect(result).toHaveNoViolations();
});

});
