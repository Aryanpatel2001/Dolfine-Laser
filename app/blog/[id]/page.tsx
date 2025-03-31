"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

// Replace the placeholder images with online image links
// Update the blogPosts object to use online images
const blogPosts: Record<string, BlogPost> = {
  "1": {
    id: "1",
    title: "India's Largest & Leading Manufacturing Company",
    content: `
      <p>In the heart of Ahmedabad, a trailblazing venture, DOLPHIN LASER MACHINE PVT. LTD. established in 2015, stands as a premier Manufacturer and Exporter of all types of Industrial Laser Machines like Marking, Cutting, Engraving, Welding, and Cleaning.</p>
      
      <p>With a dedicated in-house R&D team and rigorous quality control adhering to ISO & CE standards, Dolphin Laser excels in crafting advanced systems using state-of-the-art technologies.</p>
      
      <h3>Our Journey to Excellence</h3>
      
      <p>Starting with a vision to revolutionize the laser machine industry in India, Dolphin Laser Machine has grown exponentially over the years. Our commitment to quality, innovation, and customer satisfaction has made us the largest and leading manufacturing company in the country.</p>
      
      <p>We have established a strong presence not only in India but also in international markets, with our machines being exported to over 20 countries worldwide. Our global footprint continues to expand as more industries recognize the superior quality and performance of our laser machines.</p>
      
      <h3>State-of-the-Art Manufacturing Facility</h3>
      
      <p>Our manufacturing facility in Ahmedabad is equipped with the latest technology and machinery, allowing us to produce high-quality laser machines that meet international standards. We have a team of skilled engineers and technicians who work tirelessly to ensure that every machine that leaves our facility is of the highest quality.</p>
      
      <p>Our in-house R&D team is constantly working on developing new technologies and improving existing ones to stay ahead of the curve in the rapidly evolving laser technology landscape.</p>
      
      <h3>Commitment to Quality</h3>
      
      <p>At Dolphin Laser Machine, quality is not just a buzzword; it's a way of life. We adhere to strict quality control measures at every stage of the manufacturing process, from sourcing raw materials to the final testing of the finished product.</p>
      
      <p>Our machines are CE certified, which means they meet the health, safety, and environmental protection standards for products sold within the European Economic Area. This certification is a testament to our commitment to producing safe and reliable laser machines.</p>
      
      <h3>Customer-Centric Approach</h3>
      
      <p>We believe that our success is directly linked to the success of our customers. That's why we go the extra mile to understand their specific requirements and provide customized solutions that meet their needs.</p>
      
      <p>Our after-sales service is second to none, with a dedicated team of service engineers available round the clock to address any issues that our customers might face. We also provide comprehensive training to our customers to ensure that they can make the most of their laser machines.</p>
      
      <h3>Looking Ahead</h3>
      
      <p>As we continue to grow and expand, our focus remains on innovation, quality, and customer satisfaction. We are constantly exploring new technologies and applications for our laser machines, with the aim of providing even more value to our customers.</p>
      
      <p>With our unwavering commitment to excellence, we are confident that Dolphin Laser Machine will continue to lead the way in the laser machine industry, not just in India but globally as well.</p>
    `,
    image:
      "https://www.dolphinlasermachine.com/upload/latest_news/image/9cf18_about-us_(3).jpg",
    category: "Company",
    author: "Dolphin Team",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  "2": {
    id: "2",
    title: "When people wonder why the company is named Dolphin?",
    content: `
      <p>The name "Dolphin" for our laser machine company wasn't chosen randomly. It carries deep symbolism that reflects our core values and aspirations as an organization.</p>
      
      <h3>Intelligence and Innovation</h3>
      
      <p>Dolphins are known to be among the most intelligent creatures in the animal kingdom. They possess problem-solving abilities, can learn complex tasks, and even have their own form of communication. This intelligence mirrors our commitment to innovation and smart solutions in the laser technology industry.</p>
      
      <p>Just as dolphins navigate the vast oceans with precision, our laser machines navigate through various materials with exceptional accuracy. The intelligence of these magnificent creatures inspires us to continuously evolve our technology and stay ahead of the curve.</p>
      
      <h3>Agility and Adaptability</h3>
      
      <p>Dolphins are incredibly agile and adaptable creatures. They can swiftly change direction, adjust to different environments, and work collaboratively. Similarly, our company prides itself on being agile in responding to market changes and customer needs.</p>
      
      <p>We adapt our solutions to meet specific requirements, ensuring that our customers receive machines that perfectly fit their unique applications. This adaptability has been a key factor in our success and growth over the years.</p>
      
      <h3>Harmony and Precision</h3>
      
      <p>The graceful movements of dolphins in water exemplify harmony and precision – qualities that are essential in laser technology. Our machines operate with the same level of precision, creating clean cuts, accurate markings, and seamless welds.</p>
      
      <p>The harmony between different components of our machines ensures optimal performance and reliability, much like how every movement of a dolphin is perfectly coordinated for maximum efficiency.</p>
      
      <h3>Communication and Collaboration</h3>
      
      <p>Dolphins are social animals known for their complex communication systems and collaborative behavior. At Dolphin Laser Machine, we value open communication with our customers, partners, and team members.</p>
      
      <p>We believe in collaborative approaches to problem-solving and innovation. By working closely with our customers, we gain insights that help us improve our products and services, creating a win-win relationship.</p>
      
      <h3>Sustainability and Responsibility</h3>
      
      <p>Dolphins play an important role in maintaining the balance of marine ecosystems. Similarly, we are committed to responsible business practices and sustainable manufacturing processes.</p>
      
      <p>Our laser machines are designed to be energy-efficient and environmentally friendly, minimizing waste and reducing the carbon footprint of manufacturing operations.</p>
      
      <h3>A Symbol of Excellence</h3>
      
      <p>In many cultures, dolphins symbolize protection, guidance, and good fortune. We aspire to be a guiding force in the laser technology industry, protecting our customers' interests and contributing to their success and prosperity.</p>
      
      <p>The name "Dolphin" serves as a constant reminder of our commitment to excellence, innovation, and customer satisfaction. It embodies our vision of being a company that not only delivers superior products but also builds lasting relationships based on trust and mutual respect.</p>
      
      <p>So, when people wonder why we chose the name "Dolphin," we proudly explain that it represents everything we stand for – intelligence, agility, precision, collaboration, and responsibility. It's not just a name; it's our identity and our promise to our customers.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=2070&auto=format&fit=crop",
    category: "Company",
    author: "Viral Anatla",
    date: "June 2, 2023",
    readTime: "3 min read",
  },
  "3": {
    id: "3",
    title:
      "Introducing Viral Anatla, Director of Dolphin Laser Machine Pvt Ltd",
    content: `
      <p>Leadership is the cornerstone of any successful organization, and at Dolphin Laser Machine Pvt Ltd, this role is expertly fulfilled by our visionary director, Mr. Viral Anatla. His journey, vision, and leadership have been instrumental in establishing Dolphin Laser as India's leading manufacturer of laser technology.</p>
      
      <h3>A Visionary Leader</h3>
      
      <p>Mr. Viral Anatla's journey in the laser technology industry began with a clear vision – to revolutionize manufacturing processes in India through advanced laser solutions. With a background in engineering and a passion for innovation, he identified the potential of laser technology to transform various industries.</p>
      
      <p>In 2015, he founded Dolphin Laser Machine Pvt Ltd with the aim of providing high-quality, affordable laser machines manufactured in India. His vision was not just to create a successful business but to contribute to the "Make in India" initiative by reducing dependency on imported laser machines.</p>
      
      <h3>Driving Innovation</h3>
      
      <p>Under Mr. Anatla's leadership, Dolphin Laser has consistently pushed the boundaries of innovation. He has fostered a culture of continuous research and development, encouraging his team to explore new technologies and applications for laser machines.</p>
      
      <p>His forward-thinking approach has led to the development of several groundbreaking products, including specialized laser marking machines for the jewelry industry, high-precision cutting machines for metal fabrication, and versatile engraving solutions for various materials.</p>
      
      <h3>Building a Customer-Centric Organization</h3>
      
      <p>Mr. Anatla firmly believes that the success of Dolphin Laser is intrinsically linked to the success of its customers. This philosophy has shaped the company's approach to customer service and product development.</p>
      
      <p>He has personally overseen the implementation of comprehensive customer support systems, ensuring that Dolphin Laser not only sells machines but also provides ongoing technical assistance, training, and maintenance services. This customer-centric approach has earned the company a reputation for reliability and excellence.</p>
      
      <h3>Expanding Global Footprint</h3>
      
      <p>With a strategic vision for growth, Mr. Anatla has successfully expanded Dolphin Laser's presence beyond Indian borders. Under his guidance, the company has established a global network of distributors and clients, with machines now operating in over 20 countries.</p>
      
      <p>This international expansion has not only increased the company's market share but has also brought valuable insights from diverse industries and applications, further enriching Dolphin Laser's expertise and product offerings.</p>
      
      <h3>Commitment to Quality and Standards</h3>
      
      <p>Quality has always been non-negotiable for Mr. Anatla. He has implemented rigorous quality control processes throughout the manufacturing cycle, ensuring that every machine that bears the Dolphin Laser name meets the highest standards of performance and reliability.</p>
      
      <p>His commitment to quality is reflected in the company's adherence to international standards and certifications, including ISO and CE certifications, which have been instrumental in gaining customer trust and entering global markets.</p>
      
      <h3>Nurturing Talent and Building Teams</h3>
      
      <p>Mr. Anatla recognizes that the strength of an organization lies in its people. He has carefully built a team of skilled engineers, technicians, and professionals who share his passion for excellence and innovation.</p>
      
      <p>By creating a collaborative work environment and investing in employee development, he has fostered a culture of creativity and dedication that drives Dolphin Laser's continued growth and success.</p>
      
      <h3>Looking to the Future</h3>
      
      <p>As Dolphin Laser continues to grow and evolve, Mr. Viral Anatla remains focused on the future. He is constantly exploring new technologies, applications, and markets to ensure that the company stays at the forefront of the laser technology industry.</p>
      
      <p>His vision for the coming years includes further expansion into emerging markets, development of more sustainable and energy-efficient laser solutions, and increased automation and integration capabilities to meet the evolving needs of Industry 4.0.</p>
      
      <p>Through his visionary leadership, unwavering commitment to quality, and customer-centric approach, Mr. Viral Anatla has not only built a successful business but has also contributed significantly to the advancement of manufacturing technology in India and beyond. As he continues to guide Dolphin Laser Machine Pvt Ltd into the future, his impact on the industry and the company's trajectory of innovation and excellence is set to grow even further.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    category: "Leadership",
    author: "Marketing Team",
    date: "June 18, 2023",
    readTime: "4 min read",
  },
  "4": {
    id: "4",
    title:
      "Enhancing Printing and Marking Longevity: Fiber Laser Machine Solutions",
    content: `<p>In the world of industrial marking and printing, durability and precision are paramount. Traditional marking methods often fall short when it comes to creating permanent, high-quality marks on various materials. This is where fiber laser marking technology shines, offering unparalleled longevity and precision for industrial applications.</p>

    <h3>The Revolution of Fiber Laser Technology</h3>
    
    <p>Fiber laser marking machines represent a significant advancement in marking technology. Unlike conventional methods such as inkjet printing, pad printing, or mechanical engraving, fiber laser marking creates permanent marks by physically altering the surface of the material at a microscopic level.</p>
    
    <p>This technology uses a fiber laser beam that's focused onto the material surface, creating marks through various processes including engraving, annealing, foaming, or color change, depending on the material being marked. The result is a high-contrast, permanent mark that withstands harsh environments, chemicals, abrasion, and the test of time.</p>
    
    <h3>Superior Longevity of Laser Marks</h3>
    
    <p>The exceptional durability of fiber laser marks stems from the fundamental way they're created. Unlike printed marks that sit on the surface and can wear off, laser marks become an integral part of the material itself. Here's why laser-marked products maintain their legibility and appearance for years or even decades:</p>
    
    <ul>
      <li><strong>Resistance to Abrasion:</strong> Since laser marks are etched into the material rather than applied on top, they don't wear off with handling or friction.</li>
      <li><strong>Chemical Resistance:</strong> Laser marks withstand exposure to solvents, acids, bases, and other chemicals that would quickly degrade traditional printing.</li>
      <li><strong>Temperature Stability:</strong> Marks created by fiber lasers remain intact even when subjected to extreme temperatures that would cause conventional inks to fade or burn.</li>
      <li><strong>UV Resistance:</strong> Unlike many inks that fade with exposure to sunlight, laser marks maintain their appearance even after years of UV exposure.</li>
      <li><strong>Waterproof Properties:</strong> Laser marks are completely impervious to water and humidity, making them ideal for products used in wet environments.</li>
    </ul>
    
    <h3>Applications Across Industries</h3>
    
    <p>The exceptional longevity of fiber laser marking makes it the preferred choice across numerous industries where traceability, brand protection, and product identification are critical:</p>
    
    <h4>Automotive Industry</h4>
    <p>Vehicle components often operate in harsh conditions with exposure to heat, chemicals, and vibration. Laser marking ensures that part numbers, barcodes, and traceability information remain readable throughout the component's lifecycle, which is essential for safety and warranty purposes.</p>
    
    <h4>Medical Devices</h4>
    <p>Medical instruments and implants require permanent marking that can withstand sterilization processes and long-term implantation in the human body. Fiber laser marking provides biocompatible, corrosion-resistant marks that remain legible for the life of the device.</p>
    
    <h4>Electronics Manufacturing</h4>
    <p>Circuit boards, semiconductors, and electronic components benefit from laser marking's precision and durability. These marks remain readable even after exposure to soldering temperatures and cleaning chemicals during assembly and maintenance.</p>
    
    <h4>Jewelry and Luxury Goods</h4>
    <p>For precious metals and luxury items, laser marking provides elegant, permanent branding and authentication marks that don't detract from the item's appearance or value.</p>
    
    <h4>Industrial Tools and Equipment</h4>
    <p>Tools that undergo heavy use in industrial environments need identification marks that won't wear off. Laser marking ensures that serial numbers, ownership marks, and calibration data remain visible throughout the tool's service life.</p>
    
    <h3>Dolphin Laser's Fiber Marking Solutions</h3>
    
    <p>At Dolphin Laser Machine, we've developed a comprehensive range of fiber laser marking machines designed to meet the diverse needs of various industries. Our solutions offer:</p>
    
    <ul>
      <li><strong>Versatility:</strong> Capable of marking on metals, plastics, ceramics, and many other materials</li>
      <li><strong>Precision:</strong> High-resolution marking with exceptional detail and contrast</li>
      <li><strong>Speed:</strong> Rapid marking processes that integrate seamlessly into production lines</li>
      <li><strong>User-Friendly Operation:</strong> Intuitive software interfaces that simplify the creation and execution of marking jobs</li>
      <li><strong>Customization:</strong> Tailored solutions for specific industry requirements and applications</li>
    </ul>
    
    <h3>Economic and Environmental Benefits</h3>
    
    <p>Beyond the technical advantages, fiber laser marking offers significant economic and environmental benefits:</p>
    
    <ul>
      <li><strong>Reduced Consumables:</strong> Unlike printing methods that require inks, solvents, and other consumables, laser  Unlike printing methods that require inks, solvents, and other consumables, laser marking requires no additional materials, resulting in lower operational costs and reduced waste.</li>
      <li><strong>Energy Efficiency:</strong> Modern fiber laser systems are highly energy-efficient, consuming significantly less power than alternative marking technologies.</li>
      <li><strong>Longevity Equals Sustainability:</strong> The exceptional durability of laser marks means products don't need to be remarked or relabeled, reducing material usage and waste throughout the product lifecycle.</li>
      <li><strong>No Hazardous Materials:</strong> The laser marking process doesn't involve hazardous chemicals or VOCs, creating a safer workplace and reducing environmental impact.</li>
    </ul>
    
    <h3>Conclusion</h3>
    
    <p>In an era where product identification, traceability, and brand protection are increasingly important, the longevity of marking solutions cannot be overlooked. Fiber laser marking technology offers unmatched durability and performance, ensuring that critical information remains legible and intact throughout a product's entire lifecycle.</p>
    
    <p>At Dolphin Laser Machine, we're committed to providing cutting-edge fiber laser marking solutions that help our clients achieve superior marking longevity while improving efficiency and reducing costs. Whether you're in automotive, medical, electronics, or any other industry requiring durable marking, our fiber laser machines deliver the performance and reliability you need.</p>
    
    <p>Contact our team today to learn how our fiber laser marking solutions can enhance the longevity and quality of your product marking and printing processes.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1964&auto=format&fit=crop",
    category: "Technology",
    author: "Tech Team",
    date: "July 5, 2023",
    readTime: "6 min read",
  },
  "5": {
    id: "5",
    title:
      "Dolphin Laser Metal Welding Machines - Precision and Seamless Welding",
    content: `
      <p>In the world of metal fabrication and manufacturing, precision welding is often the difference between a good product and an exceptional one. Dolphin Laser's metal welding machines represent the pinnacle of laser welding technology, offering unparalleled precision, speed, and versatility for a wide range of applications.</p>
      
      <h3>The Evolution of Welding Technology</h3>
      
      <p>Traditional welding methods like MIG, TIG, and arc welding have served industries well for decades. However, as manufacturing requirements become increasingly demanding, these conventional techniques often fall short in terms of precision, speed, and the ability to work with complex or delicate materials.</p>
      
      <p>Laser welding technology has emerged as the solution to these challenges, offering a non-contact, highly focused heat source that can create strong, clean welds with minimal heat-affected zones. Dolphin Laser has been at the forefront of this technological evolution, developing advanced laser welding systems that are transforming manufacturing processes across industries.</p>
      
      <h3>The Dolphin Advantage: Precision Beyond Compare</h3>
      
      <p>At the heart of Dolphin Laser's welding machines is an unwavering commitment to precision. Our systems utilize advanced beam focusing technology that can concentrate laser energy to a spot size as small as 0.01mm, enabling welds of extraordinary precision and consistency.</p>
      
      <p>This level of precision allows for:</p>
      
      <ul>
        <li><strong>Microwelds:</strong> Perfect for electronics, medical devices, and jewelry manufacturing</li>
        <li><strong>Complex Geometries:</strong> Ability to weld intricate shapes and hard-to-reach areas</li>
        <li><strong>Thin Materials:</strong> Capability to join ultra-thin materials without distortion</li>
        <li><strong>Dissimilar Metals:</strong> Expertise in welding different types of metals together with strong bonds</li>
      </ul>
      
      <h3>Seamless Welds: Aesthetics Meet Functionality</h3>
      
      <p>Beyond precision, Dolphin Laser welding machines are renowned for producing seamless, aesthetically pleasing welds that require minimal to no post-processing. This is particularly valuable in industries where the appearance of the final product is as important as its structural integrity.</p>
      
      <p>Our laser welding technology creates:</p>
      
      <ul>
        <li><strong>Virtually Invisible Seams:</strong> Ideal for consumer products and visible components</li>
        <li><strong>Minimal Heat-Affected Zone:</strong> Preserving material properties adjacent to the weld</li>
        <li><strong>No Spatter:</strong> Clean process with no material ejection that requires cleaning</li>
        <li><strong>Consistent Results:</strong> Repeatable quality across production runs of any size</li>
      </ul>
      
      <h3>Versatility Across Industries</h3>
      
      <p>Dolphin Laser's metal welding machines have found applications across a diverse range of industries, each benefiting from the unique advantages of our technology:</p>
      
      <h4>Jewelry Manufacturing</h4>
      <p>Our precision laser welders have revolutionized jewelry production, allowing for intricate designs, repairs of delicate pieces, and the joining of precious metals without solder or visible seams. The non-contact nature of laser welding means even the most delicate gemstone settings can be welded without risk of damage.</p>
      
      <h4>Automotive Components</h4>
      <p>From battery connections to sensor housings, our laser welding systems provide the speed, reliability, and precision required for modern automotive manufacturing. The ability to create hermetic seals and join dissimilar metals has made our technology indispensable in this sector.</p>
      
      <h4>Medical Device Manufacturing</h4>
      <p>The biocompatibility and cleanliness of laser welds make them ideal for medical implants and surgical instruments. Our systems meet the stringent requirements of medical manufacturing, including traceability and validation capabilities.</p>
      
      <h4>Electronics</h4>
      <p>The microelectronics industry relies on our laser welding technology for creating reliable connections in battery packs, sensors, and other sensitive components where traditional soldering or welding would introduce too much heat.</p>
      
      <h4>Aerospace</h4>
      <p>Where weight, strength, and reliability are paramount, our laser welding systems provide the perfect solution for joining critical components with consistent quality and documented traceability.</p>
      
      <h3>Advanced Features for Modern Manufacturing</h3>
      
      <p>Dolphin Laser's metal welding machines incorporate a range of advanced features designed to enhance productivity, quality, and ease of use:</p>
      
      <ul>
        <li><strong>Intelligent Process Monitoring:</strong> Real-time quality control systems that ensure weld integrity</li>
        <li><strong>Automated Seam Tracking:</strong> Precision following of weld paths even on complex 3D components</li>
        <li><strong>Intuitive User Interface:</strong> Easy programming and operation, even for complex welding tasks</li>
        <li><strong>Industry 4.0 Compatibility:</strong> Seamless integration with manufacturing execution systems and data analytics platforms</li>
        <li><strong>Modular Design:</strong> Customizable configurations to meet specific application requirements</li>
      </ul>
      
      <h3>Sustainability and Efficiency</h3>
      
      <p>In an era of increasing focus on sustainable manufacturing, Dolphin Laser's welding machines offer significant environmental and efficiency benefits:</p>
      
      <ul>
        <li><strong>Energy Efficiency:</strong> Precise energy delivery only where needed, minimizing power consumption</li>
        <li><strong>No Consumables:</strong> Unlike traditional welding, no filler materials or shielding gases are typically required</li>
        <li><strong>Reduced Waste:</strong> Higher first-pass yield rates mean less scrap and rework</li>
        <li><strong>Compact Footprint:</strong> Smaller equipment size compared to conventional welding stations</li>
        <li><strong>Longer Product Lifecycles:</strong> The durability of laser welds contributes to longer-lasting products</li>
      </ul>
      
      <h3>Comprehensive Support and Training</h3>
      
      <p>At Dolphin Laser, we understand that advanced technology requires expert support. That's why we offer comprehensive training and ongoing technical assistance to ensure our customers can maximize the potential of their laser welding systems:</p>
      
      <ul>
        <li><strong>Application Development:</strong> Our engineers work with customers to develop optimal welding parameters for specific applications</li>
        <li><strong>Operator Training:</strong> Comprehensive programs to ensure your team can operate the equipment safely and effectively</li>
        <li><strong>Preventive Maintenance:</strong> Regular service programs to maintain peak performance and prevent downtime</li>
        <li><strong>Remote Diagnostics:</strong> Advanced troubleshooting capabilities to minimize disruption</li>
        <li><strong>Process Validation:</strong> Support for establishing validated processes in regulated industries</li>
      </ul>
      
      <h3>Conclusion: The Future of Metal Welding</h3>
      
      <p>As manufacturing continues to evolve toward greater precision, efficiency, and quality, Dolphin Laser's metal welding machines stand at the forefront of this transformation. Our commitment to innovation, quality, and customer success drives us to continuously refine and enhance our technology.</p>
      
      <p>Whether you're producing intricate jewelry, critical medical components, or high-volume automotive parts, Dolphin Laser offers welding solutions that deliver the perfect balance of precision, speed, and reliability. Experience the difference that truly seamless welding can make to your products and processes.</p>
      
      <p>Contact our team today to discuss how Dolphin Laser's metal welding machines can transform your manufacturing capabilities and help you achieve new levels of product quality and production efficiency.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    category: "Products",
    author: "Engineering Team",
    date: "July 22, 2023",
    readTime: "5 min read",
  },
  "6": {
    id: "6",
    title: "Laser Metal Cutting Machine - Innovation and Technology Together",
    content: `
      <p>The landscape of metal fabrication has been transformed by the advent of laser cutting technology. At Dolphin Laser Machine, we've harnessed the perfect synergy of innovation and technology to create cutting-edge laser metal cutting machines that are revolutionizing manufacturing processes across industries.</p>
      
      <h3>The Evolution of Metal Cutting</h3>
      
      <p>Traditional metal cutting methods like shearing, sawing, and plasma cutting have served industries for decades. However, these conventional approaches often struggle with complex designs, precision requirements, and the need for faster production cycles with minimal material waste.</p>
      
      <p>Laser metal cutting has emerged as the definitive solution to these challenges, offering unprecedented precision, speed, and versatility. Dolphin Laser has been at the forefront of this technological revolution, developing advanced systems that combine innovative design with cutting-edge technology.</p>
      
      <h3>The Science Behind Laser Metal Cutting</h3>
      
      <p>At its core, laser metal cutting is a thermal process that uses a focused beam of light to melt, burn, or vaporize material. The concentrated energy of the laser beam creates a narrow kerf (cut width) with minimal heat-affected zone, resulting in exceptionally clean and precise cuts.</p>
      
      <p>Dolphin Laser's cutting machines utilize advanced beam control technology that precisely modulates power, frequency, and focus to optimize cutting performance across different materials and thicknesses. This scientific approach to metal cutting enables:</p>
      
      <ul>
        <li><strong>Micron-level Precision:</strong> Ability to cut intricate patterns and fine details with exceptional accuracy</li>
        <li><strong>Clean Edge Quality:</strong> Smooth, burr-free edges that often require no secondary finishing</li>
        <li><strong>Minimal Material Distortion:</strong> Controlled heat input that prevents warping even in thin materials</li>
        <li><strong>Complex Geometries:</strong> Capability to cut intricate shapes that would be impossible with conventional methods</li>
      </ul>
      
      <h3>Innovation Meets Practical Application</h3>
      
      <p>What sets Dolphin Laser's metal cutting machines apart is our commitment to translating technological innovation into practical manufacturing solutions. Our systems incorporate numerous innovative features designed to enhance productivity, quality, and ease of use:</p>
      
      <ul>
        <li><strong>Intelligent Nesting Software:</strong> Maximizes material utilization and reduces waste</li>
        <li><strong>Adaptive Cutting Parameters:</strong> Automatically adjusts settings based on material properties</li>
        <li><strong>Multi-axis Capabilities:</strong> Enables cutting of three-dimensional components</li>
        <li><strong>Automated Material Handling:</strong> Streamlines workflow from loading to finished parts collection</li>
        <li><strong>Real-time Process Monitoring:</strong> Ensures consistent quality throughout production runs</li>
      </ul>
      
      <h3>Versatility Across Materials and Industries</h3>
      
      <p>The technological sophistication of our laser cutting systems enables them to process a wide range of metals with exceptional results:</p>
      
      <ul>
        <li><strong>Carbon Steel:</strong> From thin gauge to thick plate with minimal dross</li>
        <li><strong>Stainless Steel:</strong> Clean cuts with no contamination or discoloration</li>
        <li><strong>Aluminum:</strong> High-speed cutting of reflective materials with specialized beam control</li>
        <li><strong>Copper and Brass:</strong> Precision cutting of highly conductive materials</li>
        <li><strong>Exotic Alloys:</strong> Capability to process titanium, Inconel, and other specialized metals</li>
      </ul>
      
      <p>This material versatility has made our laser cutting technology indispensable across numerous industries:</p>
      
      <h4>Automotive Manufacturing</h4>
      <p>From chassis components to intricate brackets, our laser cutting systems provide the precision and repeatability required for modern vehicle production, with the flexibility to accommodate model changes quickly.</p>
      
      <h4>Aerospace</h4>
      <p>Where material integrity and precision are paramount, our technology enables the cutting of critical components with documented traceability and consistent quality.</p>
      
      <h4>Electronics Enclosures</h4>
      <p>The clean edges and ability to create complex cutouts make laser cutting ideal for electronics housings and panels, with the precision necessary for proper component fit.</p>
      
      <h4>Architectural Metalwork</h4>
      <p>Designers and fabricators leverage our technology to create intricate decorative elements and functional components with exceptional aesthetic quality.</p>
      
      <h4>Job Shops</h4>
      <p>The versatility and quick setup of our laser cutting systems make them perfect for contract manufacturers handling diverse projects with varying requirements.</p>
      
      <h3>Technological Advancements in Dolphin Laser Cutting Systems</h3>
      
      <p>Our commitment to continuous innovation has led to several technological breakthroughs in our laser metal cutting machines:</p>
      
      <h4>Fiber Laser Technology</h4>
      <p>Our latest generation of cutting systems utilizes fiber laser sources, offering superior energy efficiency, maintenance-free operation, and exceptional beam quality. This technology enables faster cutting speeds, especially in thin to medium-thickness materials, while consuming significantly less power than traditional CO2 lasers.</p>
      
      <h4>Intelligent Cutting Heads</h4>
      <p>Advanced sensor-equipped cutting heads automatically maintain optimal focal distance, detect and prevent collisions, and adjust parameters in real-time based on cutting conditions. This intelligent approach ensures consistent quality even when processing materials with surface variations.</p>
      
      <h4>Industry 4.0 Integration</h4>
      <p>Our systems feature comprehensive connectivity options that enable integration with manufacturing execution systems, ERP platforms, and analytics tools. This connectivity provides real-time production data, predictive maintenance alerts, and valuable insights for process optimization.</p>
      
      <h4>Hybrid Technologies</h4>
      <p>For specialized applications, we've developed hybrid systems that combine laser cutting with other processes such as marking or punching, enabling complete part production in a single setup.</p>
      
      <h3>Economic and Environmental Benefits</h3>
      
      <p>The technological sophistication of Dolphin Laser's metal cutting machines translates into significant economic and environmental advantages:</p>
      
      <ul>
        <li><strong>Reduced Material Waste:</strong> Narrow kerf width and optimal nesting minimize scrap</li>
        <li><strong>Lower Energy Consumption:</strong> Fiber laser technology uses up to 70% less electricity than conventional cutting methods</li>
        <li><strong>Elimination of Tooling Costs:</strong> No physical tooling required, enabling cost-effective production of both prototypes and high-volume runs</li>
        <li><strong>Decreased Secondary Operations:</strong> Clean cuts reduce or eliminate the need for deburring and edge finishing</li>
        <li><strong>Faster Time-to-Market:</strong> Quick setup and programming enable rapid transition from design to production</li>
      </ul>
      
      <h3>The Future of Metal Cutting Technology</h3>
      
      <p>At Dolphin Laser Machine, we're continuously pushing the boundaries of what's possible in laser metal cutting. Our R&D team is exploring several exciting technological frontiers:</p>
      
      <ul>
        <li><strong>Ultra-high-power Fiber Lasers:</strong> Enabling faster cutting of thicker materials</li>
        <li><strong>Artificial Intelligence:</strong> Machine learning algorithms that optimize cutting parameters based on material properties and quality requirements</li>
        <li><strong>Advanced Automation:</strong> Fully autonomous systems that manage material flow, part sorting, and quality control</li>
        <li><strong>Green Manufacturing:</strong> Technologies that further reduce energy consumption and enable more sustainable production processes</li>
      </ul>
      
      <h3>Conclusion: The Perfect Synergy</h3>
      
      <p>Dolphin Laser's metal cutting machines represent the perfect synergy of innovation and technology – where cutting-edge scientific principles are harnessed to create practical manufacturing solutions that deliver real-world benefits.</p>
      
      <p>Whether you're producing high-volume automotive components, precision aerospace parts, or intricate architectural elements, our laser cutting technology offers the ideal combination of precision, speed, and flexibility to enhance your manufacturing capabilities.</p>
      
      <p>Contact our team today to discover how Dolphin Laser's innovative metal cutting technology can transform your production processes and help you achieve new levels of quality, efficiency, and competitiveness in today's demanding marketplace.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1565034957450-e15565f6cb72?q=80&w=2070&auto=format&fit=crop",
    category: "Products",
    author: "R&D Department",
    date: "August 10, 2023",
    readTime: "4 min read",
  },
};

// Update the BlogDetailPage component to add share functionality and handle no related articles case
export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [animateExit, setAnimateExit] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // In a real app, you would fetch the blog post from an API
    // For this example, we're using the sample data
    const id = params.id as string;

    if (blogPosts[id]) {
      setPost(blogPosts[id]);
    } else {
      // If post not found, redirect to blog list
      router.push("/blog");
    }

    setLoading(false);
  }, [params.id, router]);

  // Handle navigation between blog posts
  const navigateToBlog = (id: string) => {
    setAnimateExit(true);
    setTimeout(() => {
      router.push(`/blog/${id}`);
      setAnimateExit(false);
    }, 300);
  };

  // Get next and previous post IDs
  const getAdjacentPostIds = () => {
    if (!post) return { prevId: null, nextId: null };

    const postIds = Object.keys(blogPosts);
    const currentIndex = postIds.indexOf(post.id);

    const prevId = currentIndex > 0 ? postIds[currentIndex - 1] : null;
    const nextId =
      currentIndex < postIds.length - 1 ? postIds[currentIndex + 1] : null;

    return { prevId, nextId };
  };

  // Handle share functionality
  const handleShare = (platform: string) => {
    if (typeof window === "undefined" || !post) return;

    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url).then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        });
        break;
      default:
        break;
    }

    setShowShareOptions(false);
  };

  // Get related articles
  const getRelatedArticles = () => {
    if (!post) return [];

    return Object.values(blogPosts)
      .filter((p) => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();
  const { prevId, nextId } = getAdjacentPostIds();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={post.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen pb-8 md:pb-20"
      >
        {/* Hero Section */}
        <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 relative h-full flex flex-col justify-end pb-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:underline mb-4 md:mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all articles
              </Link>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 max-w-4xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User size={14} className="mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <span className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-8 xl:col-span-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Post Navigation */}
              <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t flex justify-between">
                {prevId ? (
                  <button
                    onClick={() => navigateToBlog(prevId)}
                    className="flex items-center text-primary hover:underline text-sm md:text-base"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Previous Article
                  </button>
                ) : (
                  <div />
                )}

                {nextId ? (
                  <button
                    onClick={() => navigateToBlog(nextId)}
                    className="flex items-center text-primary hover:underline text-sm md:text-base"
                  >
                    Next Article
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                ) : (
                  <div />
                )}
              </div>

              {/* Share */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
                <div className="flex items-center gap-3 md:gap-4 relative">
                  <span className="font-medium text-sm md:text-base">
                    Share this article:
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="p-1.5 md:p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                      onClick={() => setShowShareOptions(!showShareOptions)}
                    >
                      <Share2 size={16} className="md:w-5 md:h-5" />
                    </button>

                    {showShareOptions && (
                      <div className="absolute left-28 md:left-36 top-0 bg-card shadow-lg rounded-lg p-2 md:p-3 z-50 border border-border flex gap-2">
                        <button
                          onClick={() => handleShare("twitter")}
                          className="p-1.5 md:p-2 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                          aria-label="Share on Twitter"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            className="md:w-4 md:h-4"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleShare("facebook")}
                          className="p-1.5 md:p-2 rounded-full bg-[#4267B2] text-white hover:opacity-90 transition-opacity"
                          aria-label="Share on Facebook"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            className="md:w-4 md:h-4"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleShare("linkedin")}
                          className="p-1.5 md:p-2 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                          aria-label="Share on LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            className="md:w-4 md:h-4"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleShare("copy")}
                          className="p-1.5 md:p-2 rounded-full bg-gray-600 text-white hover:opacity-90 transition-opacity"
                          aria-label="Copy link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            className="md:w-4 md:h-4"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {copySuccess && (
                    <span className="text-xs md:text-sm text-green-600 ml-2">
                      Link copied!
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4 xl:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-20 md:top-24 space-y-6 md:space-y-8">
                {/* Author */}
                <div className="p-4 md:p-6 bg-card rounded-xl border">
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User size={20} className="md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm md:text-base">
                        {post.author}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Content Writer
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Expert in laser technology with years of experience in the
                    industry.
                  </p>
                </div>

                {/* Related Posts */}
                <div className="p-4 md:p-6 bg-card rounded-xl border">
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                    Related Articles
                  </h3>
                  {relatedArticles.length > 0 ? (
                    <div className="space-y-3 md:space-y-4">
                      {relatedArticles.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className="flex gap-3 group"
                        >
                          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-xs md:text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs md:text-sm text-muted-foreground italic">
                      No related articles available in this category.
                    </p>
                  )}
                </div>

                {/* Categories */}
                <div className="p-4 md:p-6 bg-card rounded-xl border">
                  <h3 className="text-base md:text-lg font-medium mb-3 md:mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Company",
                      "Leadership",
                      "Technology",
                      "Products",
                      "Guide",
                    ].map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                          category === post.category
                            ? "bg-primary text-white"
                            : "bg-muted hover:bg-muted/80 text-foreground"
                        }`}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* More Articles */}
        <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              More Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {Object.values(blogPosts)
                .filter((p) => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group"
                  >
                    <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden mb-3 md:mb-4">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                      {relatedPost.date} · {relatedPost.readTime}
                    </p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
