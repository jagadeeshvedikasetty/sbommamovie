# How to Add Custom Images to SHETTY Website

## Method 1: Using Local Images (Recommended)

### For React Version:

1. **Create an images folder:**
   - Create a folder: `public/images/movies/`
   - Place your movie poster images there

2. **Name your images:**
   - Example: `dd-returns.jpg`, `nene-naa.jpg`, etc.

3. **Update MovieGrid.js:**
   
   Open `src/components/MovieGrid.js` and change the image paths:

   ```javascript
   const moviesData = [
     {
       id: 1,
       title: "DD Returns",
       year: "2023",
       image: "/images/movies/dd-returns.jpg",  // Changed this line
       rating: 7.5,
       genre: "Action, Thriller"
     },
     {
       id: 2,
       title: "Nene Naa",
       year: "2023",
       image: "/images/movies/nene-naa.jpg",  // Changed this line
       rating: 8.2,
       genre: "Horror, Mystery"
     },
     // ... update all movies
   ];
   ```

### For Standalone HTML Version:

1. **Create an images folder:**
   - In the same folder as `index.html`, create: `images/movies/`
   - Place your poster images there

2. **Update the JavaScript in index.html:**
   
   Open `index.html` and find the `moviesData` array (around line 600), then update:

   ```javascript
   const moviesData = [
     {
       id: 1,
       title: "DD Returns",
       year: "2023",
       image: "images/movies/dd-returns.jpg",  // Changed this line
       rating: 7.5,
       genre: "Action, Thriller"
     },
     // ... update all movies
   ];
   ```

---

## Method 2: Using Online Image URLs

Simply replace the placeholder URLs with real image URLs:

```javascript
{
  id: 1,
  title: "DD Returns",
  year: "2023",
  image: "https://your-image-url.com/dd-returns.jpg",
  rating: 7.5,
  genre: "Action, Thriller"
}
```

---

## Method 3: Using Base64 Images

For small images, you can convert them to base64:

```javascript
{
  id: 1,
  title: "DD Returns",
  year: "2023",
  image: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
  rating: 7.5,
  genre: "Action, Thriller"
}
```

---

## Recommended Image Specifications:

- **Format:** JPG or PNG
- **Aspect Ratio:** 2:3 (Portrait)
- **Recommended Size:** 300x450 pixels or 400x600 pixels
- **File Size:** Keep under 200KB for faster loading

---

## Adding More Movies:

To add new movies, simply add more objects to the `moviesData` array:

```javascript
const moviesData = [
  // ... existing movies
  {
    id: 13,
    title: "Your New Movie",
    year: "2024",
    image: "/images/movies/your-new-movie.jpg",
    rating: 8.5,
    genre: "Action, Drama"
  }
];
```

---

## Tips:

1. **Image Optimization:** Compress images before adding them to improve loading speed
2. **Consistent Naming:** Use lowercase and hyphens (e.g., `my-movie-name.jpg`)
3. **Alt Text:** The movie title is automatically used as alt text for accessibility
4. **Lazy Loading:** For many images, consider implementing lazy loading

---

## Troubleshooting:

**Images not showing?**
- Check the file path is correct
- Make sure the image file exists in the folder
- Check the browser console (F12) for errors
- Verify image file extensions match (jpg vs jpeg)

**Images too large/small?**
- The CSS automatically handles sizing, but use recommended dimensions for best quality
- Images will maintain 2:3 aspect ratio automatically
