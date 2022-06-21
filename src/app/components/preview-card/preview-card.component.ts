import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-card',
  templateUrl: 'preview-card.component.html',
  styleUrls: ['preview-card.component.scss'],
})
export class PreviewCardComponent {
  /**
   * This component will be used in our view all page.
   * It will show, in however stylized of a card you want to make,
   * the book's cover image, title, author, genre, & rating.
   *
   * The card will route to the book's detail page on click anywhere on the card.
   * There will also be a button to add a review for the book. When this button is clicked,
   * a form dialog opens, allowing user to submit a review for the book.
   *
   * This component will use some content projection to show the star rating.
   *    It will provide the location for the html to go within this component's own html
   *
   */
}
