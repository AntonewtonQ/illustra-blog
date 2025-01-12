
export interface BlogProps{
    id:number,
    title:string;
    description:string;
    image:string;
    date:number;
    category:string;
    author:string;
    author_img:string;
}

export function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('pt-PT', options);
  }

export const assets = {
    }

    export const blog_data = [{
        id:1,
        title:"A detailed step by step guide to manage your lifestyle",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_1.png",
        date:Date.now(),
        category:"Lifestyle",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:2,
        title:"How to create an effective startup roadmap or ideas",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_2.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:3,
        title:"Learning new technology to boost your career in software",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_3.png",
        date:Date.now(),
        category:"Technology",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:4,
        title:"Tips for getting the most out of apps and software",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_4.png",
        date:Date.now(),
        category:"Technology",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:5,
        title:"Enhancing your skills and capturing memorable moments",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_5.png",
        date:Date.now(),
        category:"Lifestyle",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:6,
        title:"Maximizing returns by minimizing resources in your startup",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_6.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:7,
        title:"Technology for Career advancement in development",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_7.png",
        date:Date.now(),
        category:"Technology",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:8,
        title:"A comprehensive roadmap for effective lifestyle management",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_8.png",
        date:Date.now(),
        category:"Lifestyle",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:9,
        title:"Achieving maximum returns with minimal resources",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_9.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:10,
        title:"Beyond the Ordinary: Crafting Your Exceptional Lifestyle",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_10.png",
        date:Date.now(),
        category:"Lifestyle",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:11,
        title:"Unveiling the Secrets of Successful Startups in Technolgy",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_11.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:12,
        title:"How to design an online Learning Platform today",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_12.png",
        date:Date.now(),
        category:"Technology",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:13,
        title:"Tomorrow's Algorithms: Shaping the Landscape of Future AI",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_13.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:14,
        title:"Balance & Bliss: Navigating Life's Journey with Style",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_14.png",
        date:Date.now(),
        category:"Lifestyle",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:15,
        title:"Exploring the Evolution of social networking in the Future",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_15.png",
        date:Date.now(),
        category:"Technology",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
    {
        id:16,
        title:"Shaping the Future of statup ecosystem in the world",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, autem aut voluptas accusantium quos natus earum neque architecto aliquid blanditiis recusandae esse illo pariatur ex error ipsum iste ea expedita.",
        image:"/blog_pic_16.png",
        date:Date.now(),
        category:"Startup",
        author:"Alex Bennett",
        author_img:"/profile_icon.png"
    },
]
