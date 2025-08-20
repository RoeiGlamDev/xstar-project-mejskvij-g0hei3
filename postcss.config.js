import autoprefixer from 'autoprefixer'; // Importing autoprefixer for adding vendor prefixes
import cssnano from 'cssnano'; // Importing cssnano for optimizing CSS

export default {
  plugins: [
    autoprefixer(), // Adding autoprefixer plugin
    cssnano({ preset: 'default' }) // Adding cssnano plugin with default preset for minification
  ]
};