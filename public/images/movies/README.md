# Movie Images Folder

## Place your movie poster images here

### Recommended Image Format:
- **Dimensions:** 300x450px or 400x600px (2:3 aspect ratio)
- **Format:** JPG or PNG
- **File Size:** Under 200KB for optimal loading

### Naming Convention:
Use lowercase with hyphens, matching your movie data:
- dd-returns.jpg
- nene-naa.jpg
- vidyarthi.jpg
- gandeevadhari-arjuna.jpg
- etc.

### Example:
If your movie is titled "DD Returns", name the image: `dd-returns.jpg`

Then in MovieGrid.js, use:
```javascript
image: "/images/movies/dd-returns.jpg"
```

### Current Structure:
```
public/
  └── images/
      └── movies/
          ├── dd-returns.jpg          (place your images here)
          ├── nene-naa.jpg
          ├── vidyarthi.jpg
          └── ... (more images)
```
