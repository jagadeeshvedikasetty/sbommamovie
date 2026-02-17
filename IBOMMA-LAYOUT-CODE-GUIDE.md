# 🎬 iBOMMA Layout - Complete Code Guide

## 📋 Files Created

### **React Version:**
1. ✅ `src/components/MovieDetailPage.js` - Component code
2. ✅ `src/components/MovieDetailPage.css` - Styling

### **Standalone HTML:**
3. ✅ `movie-detail-ibomma.html` - Complete standalone demo

---

## 📂 File Structure

```
MovieDetailPage.js (React Component)
    └── Uses MovieDetailPage.css
    
movie-detail-ibomma.html (Standalone)
    └── All-in-one HTML file
```

---

## 🎯 Layout Breakdown

### **1. Info Card (Poster + Details)**

**HTML Structure:**
```html
<div class="detail-info-card">
  <!-- Poster Left -->
  <div class="detail-poster-wrapper">
    <img class="detail-poster" />
  </div>
  
  <!-- Info Right -->
  <div class="detail-info-content">
    <h1 class="detail-title">Movie Title</h1>
    <p class="detail-year">2023</p>
    <p class="detail-genre">Comedy / Drama</p>
    
    <div class="detail-meta-row">
      <span class="meta-icon">👥</span>
      <span class="meta-label">Cast:</span>
      <span class="meta-text">Actor names</span>
    </div>
    
    <div class="detail-meta-row">
      <span class="meta-icon">👤</span>
      <span class="meta-label">Director:</span>
      <span class="meta-text">Director name</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.detail-info-card {
  display: flex;              /* Poster left, text right */
  gap: 1.5rem;
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
}

.detail-poster-wrapper {
  flex-shrink: 0;
  width: 120px;               /* Fixed poster width */
}

.detail-poster {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;          /* No distortion */
  aspect-ratio: 2/3;          /* Portrait ratio */
}
```

---

### **2. Action Buttons**

**HTML:**
```html
<div class="detail-buttons-row">
  <button class="btn-trailer">
    <span>▶</span>
    TRAILER
  </button>
  <button class="btn-updates">
    <span>💬</span>
    JOIN FOR UPDATES
  </button>
</div>
```

**CSS:**
```css
.detail-buttons-row {
  display: flex;
  gap: 1rem;
}

.btn-trailer,
.btn-updates {
  flex: 1;                    /* Equal width */
  padding: 0.9rem 1.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.btn-trailer {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.btn-updates {
  background: #4ade80;        /* Green */
  color: #000;
}
```

---

### **3. Video Player**

**HTML:**
```html
<div class="video-container">
  <iframe 
    class="video-iframe"
    src="https://www.youtube.com/embed/VIDEO_ID"
  ></iframe>
</div>
```

**CSS:**
```css
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;         /* Video ratio */
  border-radius: 8px;
  overflow: hidden;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
```

---

### **4. Synopsis Section**

**HTML:**
```html
<div class="synopsis-container">
  <h2 class="synopsis-title">Synopsis:</h2>
  <p class="synopsis-text">Movie description...</p>
  
  <div class="movie-info-grid">
    <div class="info-item">
      <span class="info-label">Rating:</span>
      <span class="info-value">⭐ 7.5/10</span>
    </div>
    <!-- More info items -->
  </div>
</div>
```

**CSS:**
```css
.synopsis-container {
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 8px;
}

.movie-info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.info-item {
  background: rgba(74, 222, 128, 0.05);
  padding: 0.8rem;
  border-radius: 6px;
  text-align: center;
}
```

---

## 📱 Responsive Design

### **Desktop (>768px):**
```
┌──────────────────────────────┐
│ [Poster]  Title               │
│ 120px     Year                │
│ wide      Genre               │
│           Cast: ...           │
│           Director: ...       │
└──────────────────────────────┘
│ [TRAILER]  [JOIN FOR UPDATES] │
└──────────────────────────────┘
│      [Video Player 16:9]      │
└──────────────────────────────┘
```

### **Mobile (≤768px):**
```
┌──────────────┐
│   [Poster]   │
│   Centered   │
└──────────────┘
    Title
    Year
    Genre
    Cast: ...
    Director: ...

┌──────────────┐
│  [TRAILER]   │
└──────────────┘
┌──────────────┐
│[JOIN UPDATES]│
└──────────────┘
┌──────────────┐
│    [Video]   │
└──────────────┘
```

---

## 🎨 Key CSS Classes

### **Layout Classes:**
| Class | Purpose |
|-------|---------|
| `.detail-info-card` | Container for poster + info |
| `.detail-poster-wrapper` | Poster container (120px) |
| `.detail-poster` | Actual image (2:3 ratio) |
| `.detail-info-content` | Text content wrapper |
| `.detail-buttons-row` | Button container |
| `.video-container` | Video player wrapper |
| `.synopsis-container` | Synopsis section |

### **Text Classes:**
| Class | Font Size | Color |
|-------|-----------|-------|
| `.detail-title` | 1.5rem | #fff |
| `.detail-year` | 1rem | #999 |
| `.detail-genre` | 0.95rem | #ccc |
| `.meta-text` | 0.9rem | #ccc |
| `.synopsis-title` | 1.2rem | #4ade80 |

### **Button Classes:**
| Class | Background | Text Color |
|-------|------------|------------|
| `.btn-trailer` | rgba(255,255,255,0.1) | #fff |
| `.btn-updates` | #4ade80 | #000 |

---

## 🔧 React Component Explanation

### **MovieDetailPage.js Structure:**

```javascript
const MovieDetailPage = ({ moviesData }) => {
  // 1. Get movie ID from URL
  const { id } = useParams();
  
  // 2. Find movie in data
  const movie = moviesData.find(m => m.id === parseInt(id));
  
  // 3. Convert YouTube URL to embed
  const getYouTubeEmbedUrl = (url) => {
    // Extract video ID from different URL formats
  };
  
  // 4. Render layout
  return (
    <div className="movie-detail-page">
      {/* Info Card */}
      {/* Buttons */}
      {/* Video */}
      {/* Synopsis */}
    </div>
  );
};
```

---

## 💡 How to Use

### **React Version:**

**Step 1:** Make sure you have the files:
- `src/components/MovieDetailPage.js`
- `src/components/MovieDetailPage.css`

**Step 2:** Component is already integrated in `App.js`:
```javascript
<Route path="/movie/:id" element={<MovieDetailPage moviesData={moviesData} />} />
```

**Step 3:** Click any movie to see the layout!

---

### **Standalone HTML:**

**Step 1:** Open `movie-detail-ibomma.html` in browser

**Step 2:** Customize the content:
```html
<!-- Change poster image -->
<img src="YOUR_IMAGE_URL" />

<!-- Change title -->
<h1 class="detail-title">Your Movie Title</h1>

<!-- Change video -->
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"></iframe>
```

**Step 3:** View in browser to see the layout!

---

## 🎯 Key Features

### **1. Poster on Left (Desktop)**
```css
.detail-info-card {
  display: flex;        /* Side by side */
}
```

### **2. Poster on Top (Mobile)**
```css
@media (max-width: 768px) {
  .detail-info-card {
    flex-direction: column;  /* Stack vertically */
  }
}
```

### **3. Buttons Side by Side (Desktop)**
```css
.detail-buttons-row {
  display: flex;
  gap: 1rem;
}
```

### **4. Buttons Stacked (Mobile)**
```css
@media (max-width: 768px) {
  .detail-buttons-row {
    flex-direction: column;  /* Stack vertically */
  }
}
```

---

## 📊 Color Scheme

```css
/* Backgrounds */
--bg-page: #000
--bg-card: #1a1a1a
--bg-button-dark: rgba(255, 255, 255, 0.1)
--bg-button-green: #4ade80

/* Text */
--text-primary: #fff
--text-secondary: #999
--text-tertiary: #ccc

/* Accent */
--accent-green: #4ade80
```

---

## 🔍 Customization Guide

### **Change Poster Size:**
```css
.detail-poster-wrapper {
  width: 150px;  /* Change from 120px */
}
```

### **Change Button Colors:**
```css
.btn-updates {
  background: #ff6b6b;  /* Red instead of green */
}
```

### **Change Info Grid Columns:**
```css
.movie-info-grid {
  grid-template-columns: repeat(2, 1fr);  /* 2 instead of 3 */
}
```

---

## ✅ Testing Checklist

- [ ] Desktop: Poster on left, text on right
- [ ] Desktop: Buttons side by side
- [ ] Mobile: Poster on top, centered
- [ ] Mobile: Text centered
- [ ] Mobile: Buttons stacked vertically
- [ ] Video: 16:9 aspect ratio maintained
- [ ] Poster: 2:3 aspect ratio maintained
- [ ] All text readable
- [ ] Colors match iBOMMA

---

## 🎉 Summary

**React Files:**
- `MovieDetailPage.js` - Component logic
- `MovieDetailPage.css` - Styling

**Standalone:**
- `movie-detail-ibomma.html` - Complete demo

**Layout:**
- Poster left / Info right (desktop)
- Poster top / Info below (mobile)
- Buttons horizontal / vertical responsive
- Video player 16:9 ratio
- Synopsis section with info grid

**Colors:**
- Dark theme (#000, #1a1a1a)
- Green accent (#4ade80)
- Light text (#fff, #999, #ccc)

Perfect iBOMMA layout! 🎬✨
