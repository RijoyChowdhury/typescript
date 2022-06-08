// instructions on which class can be
// an argument to addMarker function
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  // optional member
  color?: string;
}

export default class CustomMap {
  private googleMap: google.maps.Map;

  // Map api documentation
  // https://developers.google.com/maps/documentation/javascript
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(elementId) as HTMLElement,
      {
        zoom: 2,
        center: { lat: 0, lng: 0 },
        // zoom: 12,
        // center: { lat: -28.643387, lng: 153.612224 },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
