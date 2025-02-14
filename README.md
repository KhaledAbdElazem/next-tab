# Cyberpunk Dashboard

A futuristic, cyberpunk-themed dashboard built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **tsParticles**. This project features a dynamic particle background, smooth animations, and a sleek, neon-themed design.

![Screenshot](/public/Screenshot.png)  


---

## Features

- **Dynamic Particle Background**:
  - Powered by **tsParticles**, the background features neon-colored particles that react to mouse movements and clicks.
- **Smooth Animations**:
  - Modal animations are handled by **Framer Motion** for a sleek, futuristic feel.
- **Neon Cyberpunk Theme**:
  - Neon blue and pink colors with glowing effects for a cyberpunk aesthetic.
- **Responsive Design**:
  - Fully responsive layout that works on all screen sizes.
- **Interactive Components**:
  - Bookmark grid with hover effects and a modal for displaying details.

---

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for smooth, declarative animations.
- **tsParticles**: Lightweight library for creating particle effects.
- **React**: JavaScript library for building user interfaces.

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. Download it [here](https://nodejs.org/).
- **npm**: npm is bundled with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cyberpunk-dashboard.git
   cd cyberpunk-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the project**:
   Visit `http://localhost:3000` in your browser to view the project.

---

## Project Structure

```
cyberpunk-dashboard/
├── components/            # Reusable components
│   ├── BookmarkGrid.tsx   # Bookmark grid component
│   ├── Clock.tsx          # Clock component
│   ├── Modal.tsx          # Modal component
│   ├── Particles.tsx      # Particle background component
│   └── SearchBar.tsx      # Search bar component
├── pages/                 # Next.js pages
│   ├── _app.tsx           # Custom App component
│   └── index.tsx          # Home page
├── public/                # Static assets
├── styles/                # Global styles
│   └── globals.css        # Global CSS file
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## Customization

### Changing Colors

To change the neon colors, update the `neon-blue` and `neon-pink` values in the `tailwind.config.ts` file:

```ts
export default {
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00e1ff', // Change to your preferred blue
        'neon-pink': '#ff00ff', // Change to your preferred pink
      },
    },
  },
};
```

### Adjusting Particles

To customize the particle effects, modify the `options` object in the `Particles.tsx` file. Refer to the [tsParticles documentation](https://particles.js.org/) for more options.

---

## Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **tsParticles**: For the amazing particle effects.
- **Framer Motion**: For smooth and declarative animations.
- **Tailwind CSS**: For making styling a breeze.
- **Next.js**: For the powerful React framework.

---

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: khaledabdelazem.work@gmail.com
- **GitHub**: [Khaled-AbdElazem](https://github.com/KhaledAbdElazem)
- **LinkedIn**: [Khaled-AbdElazem](https://www.linkedin.com/in/khaled-abdelazem/)
