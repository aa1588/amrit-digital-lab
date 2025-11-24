# Gallery Images

Add your gallery photos to this folder.

## Instructions:

1. Add your photos to this `/public/gallery/` folder
2. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Update the gallery items in `/src/pages/gallery.astro` with:
   - The correct image path
   - Your caption describing the event/moment
   - The date of the event

## Recommended Image Specifications:

- Format: JPG or PNG
- Dimensions: 800x600px or similar aspect ratio (4:3 or 16:9)
- File size: Keep under 500KB for optimal loading
- Orientation: Landscape works best for the card layout

## Example:

```javascript
{
  image: '/gallery/photo1.jpg',
  caption: 'Speaking at Tech Conference 2024',
  date: 'March 2024'
}
```
