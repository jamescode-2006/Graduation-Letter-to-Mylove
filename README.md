# 💖 Graduation Love Letter Website

A beautiful, interactive website created to celebrate a special graduation milestone with love messages and photo memories.

## ✨ Features

- **Animated Hero Section** with floating hearts and gradient backgrounds
- **Interactive Love Letter** with typewriter animation effect
- **Photo Album Gallery** with smooth animations and hover effects
- **Background Music** with play/pause control button
- **Responsive Design** that works on all devices (desktop, tablet, mobile)
- **Smooth Transitions** and fullscreen viewing modes
- **Beautiful Typography** using Google Fonts (Poppins and Dancing Script)

## 📁 Project Structure

```
My love graduation/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── images/             # Photo gallery images
│   ├── 5aab064b-6ce3-426c-ab00-010d9e296dc2.jpg
│   ├── 67fa0943-117f-42b7-8dcc-07023c980b3c.jpg
│   ├── 8e6a85af-258e-409c-89d4-18bdfd964197.jpg
│   ├── 95b8fdc3-413c-473d-af99-97bcfa172eb9.jpg
│   └── cef6c854-1156-4d55-9db5-1ad133787ac1.jpg
├── music/              # Background music folder
│   └── README.txt      # Instructions for adding music
└── README.md           # This file
```

## 🚀 How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Click "💌 Message"**: View the animated love letter with typewriter effect
3. **Click "📸 Album"**: Browse through the beautiful photo gallery
4. **Click "🏠 Home"**: Return to the main page
5. **Click the 🔊/🔇 button**: Toggle background music on/off (bottom right corner)
6. **Enjoy**: Watch the floating hearts and smooth animations throughout

## 🎨 Customization

### Add Background Music
1. Get a romantic music file (MP3, WAV, or OGG format)
2. Rename it to `background-music.mp3` (or .wav, .ogg)
3. Place it in the `music/` folder
4. The website will automatically play it when users click Message or Album
5. Users can control playback with the music button (🔊/🔇) in the bottom right

### Change the Message
Edit the `messageText` variable in `script.js` (line 2) to customize the love letter.

### Add More Photos
1. Place your photos in the `images/` folder
2. Add new `<article>` elements in the gallery section of `index.html`
3. Update the `src` attribute to point to your new images

### Modify Colors
The color scheme uses these main colors:
- Pink gradient: `#d946a6`, `#ec4899`
- Purple: `#8b5cf6`
- Light backgrounds: Various pastel gradients

Edit these in `style.css` to change the color theme.

## 🌐 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Technical Details

- **No dependencies required** - Pure HTML, CSS, and JavaScript
- **Responsive Grid Layout** using CSS Grid
- **Intersection Observer API** for scroll-triggered animations
- **CSS Custom Animations** for hearts, typing cursor, and transitions
- **Lazy Loading** for images to improve performance

## 📝 Credits

**Created with love by:** James Lloyd  
**Year:** 2026  
**Occasion:** Graduation Celebration

---

Made with 💕 for a special graduate
