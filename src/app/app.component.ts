import { Component } from '@angular/core';
import { ImagesService } from 'src/services/images.service';
import { PropertiesService } from 'src/services/propeties.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-Project';

  propertiesList: any[] = [];
  imagesList: any[] = [];
  currentProperty: any;
  currentPropertyCount: any;
  currentImage: any;
  currentImageCount: any;

  constructor(
    private propertiesService: PropertiesService,
    private imagesService: ImagesService
  ) {
    this.getProperties();
  }

  getProperties() {
    this.propertiesService.getProperties().subscribe((properties) => {
      this.propertiesList = properties.properties;
      this.currentPropertyCount = 0;
      this.currentProperty = this.propertiesList[this.currentPropertyCount];

      this.getImages(this.currentProperty._id);
    });
  }

  getImages(id: string) {
    this.imagesService.getImagesById(id).subscribe((images) => {
      this.imagesList = images['images'];
      this.currentImageCount = 0;
      this.currentImage = this.imagesList[this.currentImageCount];
    });
  }

  getNextImage() {
    if (this.currentImageCount === this.imagesList.length - 1) {
      this.currentImageCount = 0;
    } else {
      this.currentImageCount++;
    }

    this.currentImage = this.imagesList[this.currentImageCount];
  }

  getPreviousImage() {
    if (this.currentImageCount === 0) {
      this.currentImageCount = this.imagesList.length - 1;
    } else {
      this.currentImageCount--;
    }
    this.currentImage = this.imagesList[this.currentImageCount];
  }

  getNextProperty() {
    this.currentImageCount = 0;
    if (this.currentPropertyCount === this.propertiesList.length - 1) {
      this.currentPropertyCount = 0;
    } else {
      this.currentPropertyCount++;
    }

    this.currentProperty = this.propertiesList[this.currentPropertyCount];
    this.getImages(this.currentProperty._id);
  }
}
