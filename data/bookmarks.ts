export interface Bookmark {
    name: string;
    url: string;
    description?: string; // Optional description for tooltips
    icon?: string; // Optional custom icon override
  }
  
  export interface BookmarkCategory {
    [key: string]: Bookmark[];
  }
  
  export const bookmarkCategories: BookmarkCategory = {
    "Development": [
      { 
        name: "GitHub",
        url: "https://github.com",
        description: "Code hosting and collaboration platform"
      },
      { 
        name: "VS Code",
        url: "https://vscode.dev",
        description: "Online code editor"
      },
      { 
        name: "CodeSandbox",
        url: "https://codesandbox.io",
        description: "Online code editor for web development"
      },
      { 
        name: "Vercel",
        url: "https://vercel.com",
        description: "Deploy web projects"
      },
      { 
        name: "Next.js Docs",
        url: "https://nextjs.org/docs",
        description: "Next.js documentation"
      },
      { 
        name: "TypeScript Docs",
        url: "https://www.typescriptlang.org/docs/",
        description: "TypeScript documentation"
      },
      { 
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Web development documentation"
      },
      { 
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Developer Q&A platform"
      }
    ],
  
    "Design Tools": [
      { 
        name: "Figma",
        url: "https://www.figma.com",
        description: "Collaborative design tool"
      },
      { 
        name: "Dribbble",
        url: "https://dribbble.com",
        description: "Design inspiration"
      },
      { 
        name: "Behance",
        url: "https://www.behance.net",
        description: "Design showcase platform"
      },
      { 
        name: "Coolors",
        url: "https://coolors.co",
        description: "Color scheme generator"
      },
      { 
        name: "Font Awesome",
        url: "https://fontawesome.com",
        description: "Icon library"
      },
      { 
        name: "Google Fonts",
        url: "https://fonts.google.com",
        description: "Free web fonts"
      },
      { 
        name: "Unsplash",
        url: "https://unsplash.com",
        description: "Free high-quality images"
      },
      { 
        name: "Pexels",
        url: "https://www.pexels.com",
        description: "Free stock photos & videos"
      }
    ],
  
    "AI & Tools": [
      { 
        name: "ChatGPT",
        url: "https://chat.openai.com",
        description: "AI language model"
      },
      { 
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        description: "AI pair programmer"
      },
      { 
        name: "Midjourney",
        url: "https://www.midjourney.com",
        description: "AI image generation"
      },
      { 
        name: "Hugging Face",
        url: "https://huggingface.co",
        description: "AI model hub"
      },
      { 
        name: "Runway",
        url: "https://runway.ml",
        description: "AI creative tools"
      },
      { 
        name: "Leonardo.ai",
        url: "https://leonardo.ai",
        description: "AI art generation"
      },
      { 
        name: "Claude",
        url: "https://claude.ai",
        description: "Anthropic's AI assistant"
      },
      { 
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        description: "AI search engine"
      }
    ],
  
    "Productivity": [
      { 
        name: "Notion",
        url: "https://www.notion.so",
        description: "All-in-one workspace"
      },
      { 
        name: "Trello",
        url: "https://trello.com",
        description: "Project management tool"
      },
      { 
        name: "Linear",
        url: "https://linear.app",
        description: "Issue tracking"
      },
      { 
        name: "Raycast",
        url: "https://www.raycast.com",
        description: "Productivity launcher"
      },
      { 
        name: "Cron",
        url: "https://cron.com",
        description: "Calendar app"
      },
      { 
        name: "Obsidian",
        url: "https://obsidian.md",
        description: "Knowledge base"
      },
      { 
        name: "Todoist",
        url: "https://todoist.com",
        description: "Task manager"
      },
      { 
        name: "Arc Browser",
        url: "https://arc.net",
        description: "Modern web browser"
      }
    ],
  
    "Learning": [
      { 
        name: "Frontend Masters",
        url: "https://frontendmasters.com",
        description: "Web development courses"
      },
      { 
        name: "Coursera",
        url: "https://www.coursera.org",
        description: "Online courses"
      },
      { 
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org",
        description: "Learn to code for free"
      },
      { 
        name: "LeetCode",
        url: "https://leetcode.com",
        description: "Coding practice"
      },
      { 
        name: "Exercism",
        url: "https://exercism.org",
        description: "Code practice and mentorship"
      },
      { 
        name: "Udemy",
        url: "https://www.udemy.com",
        description: "Online courses marketplace"
      },
      { 
        name: "Kent C. Dodds",
        url: "https://kentcdodds.com/blog",
        description: "Web development blog"
      },
      { 
        name: "Josh W Comeau",
        url: "https://www.joshwcomeau.com",
        description: "Web development blog"
      }
    ],
  
    "Entertainment": [
      { 
        name: "YouTube",
        url: "https://www.youtube.com",
        description: "Video platform"
      },
      { 
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Streaming service"
      },
      { 
        name: "Spotify",
        url: "https://open.spotify.com",
        description: "Music streaming"
      },
      { 
        name: "Twitch",
        url: "https://www.twitch.tv",
        description: "Live streaming"
      },
      { 
        name: "Reddit",
        url: "https://www.reddit.com",
        description: "Social news and discussion"
      },
      { 
        name: "Discord",
        url: "https://discord.com",
        description: "Chat and communities"
      },
      { 
        name: "Steam",
        url: "https://store.steampowered.com",
        description: "Gaming platform"
      },
      { 
        name: "IMDb",
        url: "https://www.imdb.com",
        description: "Movie database"
      }
    ],
  
    "Utilities": [
      { 
        name: "Excalidraw",
        url: "https://excalidraw.com",
        description: "Virtual whiteboard"
      },
      { 
        name: "Carbon",
        url: "https://carbon.now.sh",
        description: "Code screenshots"
      },
      { 
        name: "TinyPNG",
        url: "https://tinypng.com",
        description: "Image compression"
      },
      { 
        name: "JSON Editor",
        url: "https://jsoneditoronline.org",
        description: "JSON visualization"
      },
      { 
        name: "RegExr",
        url: "https://regexr.com",
        description: "Regular expression tester"
      },
      { 
        name: "Squoosh",
        url: "https://squoosh.app",
        description: "Image optimizer"
      },
      { 
        name: "Hoppscotch",
        url: "https://hoppscotch.io",
        description: "API testing"
      },
      { 
        name: "Convertio",
        url: "https://convertio.co",
        description: "File converter"
      }
    ],
  
    "Resources": [
      { 
        name: "Can I Use",
        url: "https://caniuse.com",
        description: "Browser support tables"
      },
      { 
        name: "DevDocs",
        url: "https://devdocs.io",
        description: "API documentation"
      },
      { 
        name: "Rico's cheatsheets",
        url: "https://devhints.io",
        description: "Development cheatsheets"
      },
      { 
        name: "bundlephobia",
        url: "https://bundlephobia.com",
        description: "npm package size"
      },
      { 
        name: "npm trends",
        url: "https://www.npmtrends.com",
        description: "Compare npm packages"
      },
      { 
        name: "Tailwind Components",
        url: "https://tailwindui.com",
        description: "UI components"
      },
      { 
        name: "Heroicons",
        url: "https://heroicons.com",
        description: "SVG icons"
      },
      { 
        name: "Favicon.io",
        url: "https://favicon.io",
        description: "Favicon generator"
      }
    ]
  };