// Product data structure
export type ProductSpecification = {
  label: string;
  value: string | string[];
};

export type ProductImage = {
  url: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  materials?: string[];
  specifications: ProductSpecification[];
  features: string[];
  mainImage: string;
  images: ProductImage[];
  applicationImages: ProductImage[];
  popular: boolean;
};

// Product data
export const products: Product[] = [
  {
    id: "fiber-laser-marking",
    name: "Fiber Laser Marking Machine",
    slug: "fiber-laser-marking-machine",
    shortDescription: "High-precision laser marking for metals and plastics",
    description:
      "Our Fiber Laser Marking Machine delivers exceptional precision and speed for permanent marking on a wide range of materials. With advanced fiber laser technology, it provides high-contrast, durable marks that resist wear, corrosion, and heat. Ideal for industrial applications requiring traceability, branding, or decorative marking.",
    category: "Marking",
    materials: [
      "Stainless Steel",
      "Mild Steel",
      "Aluminum",
      "Cast Iron",
      "Plastic",
      "Gold",
      "Silver",
      "Platinum",
      "Coated Glass",
      "Bronze",
      "Titanium",
      "Copper",
      "Brass",
    ],
    specifications: [
      {
        label: "Working Area",
        value: [
          "100x100 mm",
          "175x175 mm",
          "220x220 mm",
          "300x300 mm",
          "Customized",
        ],
      },
      { label: "Laser Type", value: "Fiber Laser" },
      {
        label: "Laser Power",
        value: ["20W", "30W", "50W", "60W", "100W", "200W"],
      },
      { label: "Operating System", value: "Windows 10" },
      {
        label: "Supported File Formats",
        value: "PLT, DXF, BMP, JPG, GLF, PNG",
      },
      {
        label: "Working Voltage",
        value: "Single Phase 220-230V / 50HZ (Earthing Required)",
      },
      { label: "Cooling System", value: "Air Cooling" },
      { label: "Marking Speed", value: "Up to 7000 mm/s" },
      { label: "Minimum Line Width", value: "0.01 mm" },
      { label: "Minimum Character Size", value: "0.1 mm" },
    ],
    features: [
      "High-speed marking capability",
      "Maintenance-free operation",
      "Long laser source lifetime (100,000+ hours)",
      "Compact design for easy integration",
      "User-friendly software interface",
      "Automatic focus adjustment",
      "Rotary attachment option for cylindrical objects",
      "Industrial-grade construction for 24/7 operation",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/fiber-laser-marking-machine-1.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/fiber-laser-marking-machine-1.webp",
        alt: "Fiber Laser Marking Machine - Front View",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/fiber-laser-marking-machine-2.webp",
        alt: "Fiber Laser Marking Machine - Side View",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/fiber-laser-marking-machine-3.webp",
        alt: "Fiber Laser Marking Machine - Control Panel",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/fiber-laser-marking-machine-4.webp",
        alt: "Fiber Laser Marking Machine - In Operation",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/1.webp",
        alt: "Marking on metal components",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/2.webp",
        alt: "QR code marking on steel",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/3.webp",
        alt: "Serial number marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/4.webp",
        alt: "Logo marking on tools",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/5.webp",
        alt: "Barcode marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/6.webp",
        alt: "Marking on jewelry",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/7.webp",
        alt: "Deep engraving on metal",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/8.webp",
        alt: "Circuit board marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/9.webp",
        alt: "Marking on automotive parts",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/10.webp",
        alt: "Precision marking on small parts",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/11.webp",
        alt: "Annealing marking on stainless steel",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-marking-machine/application/12.webp",
        alt: "Decorative marking on metal",
      },
    ],
    popular: true,
  },
  {
    id: "fiber-laser-cutting",
    name: "Fiber Laser Cutting Machine",
    slug: "fiber-laser-cutting-machine",
    shortDescription: "High-power laser cutting for metal sheets and plates",
    description:
      "Our Fiber Laser Cutting Machine delivers exceptional cutting precision and speed for metal processing. With advanced fiber laser technology, it provides clean, precise cuts with minimal heat-affected zone. Perfect for manufacturing, fabrication, and metal processing industries requiring high-quality cuts with fast turnaround times.",
    category: "Cutting",
    specifications: [
      {
        label: "Working Area",
        value: [
          "1500×3000 mm",
          "2000×4000 mm",
          "2000×6000 mm",
          "2500×6500 mm",
          "Customized",
        ],
      },
      { label: "Laser Type", value: "Fiber Laser" },
      {
        label: "Laser Power",
        value: ["1500W", "2000W", "3000W", "6000W", "12000W", "20000W"],
      },
      { label: "Laser Head", value: "Autofocus" },
      { label: "Servo Motors", value: "Panasonic,Yaskawa" },
      { label: "Rack & Pinion", value: "YYC(Taiwan)" },
      { label: "Pneumatics Parts", value: "SMC(Japan)" },
      { label: "Maximum Travelling Speed", value: "120M/Per Min" },
    ],
    features: [
      "High-speed cutting capability",
      "Automatic nozzle changer option",
      "Automatic focus control",
      "Dual exchange worktable for continuous operation",
      "Advanced nesting software for material optimization",
      "Automatic edge finding system",
      "Collision protection system",
      "Remote monitoring and diagnostics",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/fiber-laser-cutting-machine-1.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/fiber-laser-cutting-machine-1.webp",
        alt: "Fiber Laser Cutting Machine - Front View",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/fiber-laser-cutting-machine-2.webp",
        alt: "Fiber Laser Cutting Machine - Side View",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/fiber-laser-cutting-machine-3.webp",
        alt: "Fiber Laser Cutting Machine - Control Panel",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/fiber-laser-cutting-machine-4.webp",
        alt: "Fiber Laser Cutting Machine - In Operation",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/1.webp",
        alt: "Cutting metal sheets",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/10.webp",
        alt: "Precision cutting of complex shapes",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/11.webp",
        alt: "Automotive parts cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/12.webp",
        alt: "Metal fabrication",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/2.webp",
        alt: "Architectural metal cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/3.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/4.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/5.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/6.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/7.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/8.webp",
        alt: "Kitchen equipment manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-cutting-machine/application/9.webp",
        alt: "Kitchen equipment manufacturing",
      },
    ],
    popular: true,
  },
  {
    id: "fiber-laser-welding",
    name: "Fiber Laser Welding Machine",
    slug: "fiber-laser-welding-machine",
    shortDescription:
      "Precision welding for metals with minimal heat distortion",
    description:
      "Our Fiber Laser Welding Machine provides high-precision welding with minimal heat input and distortion. Perfect for joining thin materials and creating strong, clean welds in various metals. The non-contact process ensures consistent quality and is ideal for applications requiring aesthetic finish and structural integrity.",
    category: "Welding",
    materials: ["Stainless Steel", "Mild Steel", "Aluminum"],
    specifications: [
      {
        label: "Laser Power",
        value: ["1500W", "2000W", "3000W"],
      },
      {
        label: "Operational Power",
        value: [
          "1 Phase (230V-50Hz)",
          "1500",
          "2000 W",
          "3 Phase (440V-50Hz) 3000 W",
        ],
      },
      { label: "Wobble Weld Width", value: "0.5 to 5 mm (Optional 10 mm)" },
      { label: "Material Weld Thickness", value: "0.5 to 10 mm" },
      { label: "Wobble Frequency", value: "Up to 300 Hz" },
      { label: "Fiber Cable Length", value: "10 Meters" },
      { label: "Parameter Presets", value: "100 +" },
      { label: "Cooling Style", value: "Water Cooling" },
    ],
    features: [
      "Hand-held and fixed working modes",
      "Automatic wire feeding option",
      "Wobble welding capability",
      "Minimal heat-affected zone",
      "No consumables required",
      "Precise energy control",
      "Automatic seam tracking option",
      "Welding parameter memory for quick setup",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/fiber-laser-welding-machine.webp?ver=1742728463",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/fiber-laser-welding-machine.webp?ver=1742730340",
        alt: "Fiber Laser Welding Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/application/1.webp",
        alt: "Precision welding of thin materials",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/application/2.webp",
        alt: "Automotive component welding",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/application/3.webp",
        alt: "Electronics enclosure welding",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/fiber-laser-welding-machine/application/4.webp",
        alt: "Medical device manufacturing",
      },
    ],
    popular: true,
  },
  {
    id: "online-laser-marking",
    name: "Online Laser Marking Machine",
    slug: "online-laser-marking-machine",
    shortDescription: "Integrated marking solution for production lines",
    description:
      "Our Online Laser Marking Machine is designed for seamless integration into production lines, offering high-speed, on-the-fly marking without interrupting the manufacturing process. Perfect for industries requiring continuous marking of products with serial numbers, barcodes, or logos while maintaining production efficiency.",
    category: "Marking",
    materials: [
      "PVC PIPE",
      "UPVC PIPE",
      "HDPE PIPE",
      "AGRO PIPE",
      "IRRIGATION PIPE",
      "PVC GARDEN PIPE",
      "DRIP IRRIGATION PIPE",
      "LDPE IRRIGATION PIPE",
      "AGRICULTURAL PIPE",
      "WIRE, PETBOTTLE, FMCG",
    ],
    specifications: [
      { label: "Laser Type", value: "Fiber Laser/CO2 Laser/UV Laser" },
      {
        label: "Laser Power",
        value: [
          "30W (Optional 50, 100 W)",
          "30 W (Optional 60W)",
          "5 W (Optional 10/15 W)",
        ],
      },
      { label: "Marking Speed", value: "1 to 200 Min/Meter" },

      {
        label: "Working Voltage",
        value: "Single Phase 220-230V/50HZ (Earthing Req)",
      },
    ],
    features: [
      "Flying marking capability",
      "Encoder integration for speed synchronization",
      "Vision system option for mark verification",
      "Automatic product detection",
      "Industrial PLC integration",
      "Remote monitoring and control",
      "Database connectivity for variable data",
      "IP65 protection for harsh environments",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/online-laser-marking-machine.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/online-laser-marking-machine.webp",
        alt: "Online Laser Marking Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/application/1.webp",
        alt: "Production line integration",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/application/2.webp",
        alt: "Beverage packaging marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/application/3.webp",
        alt: "Cable marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/application/4.webp",
        alt: "Pharmaceutical packaging",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/online-laser-marking-machine/application/5.webp",
        alt: "Food packaging date coding",
      },
    ],
    popular: false,
  },
  {
    id: "co2-laser-cutting",
    name: "CO2 Laser Cutting & Engraving Machine",
    slug: "co2-laser-cutting-engraving-machine",
    shortDescription: "Versatile solution for non-metal materials",
    description:
      "Our CO2 Laser Cutting & Engraving Machine offers exceptional versatility for processing non-metal materials. With precise beam control and advanced motion systems, it delivers clean cuts and detailed engravings on a wide range of materials. Ideal for signage, acrylic fabrication, wood crafting, and more.",
    category: "Cutting & Engraving",
    materials: ["Acrylic", "MDF", "Leather", "Stone", "Fabric", "Rubber"],
    specifications: [
      {
        label: "Cutting Area",
        value: [
          "600x900 mm",
          "1300x900 mm",
          "1400x1000 mm",
          "1600x1000 mm",
          "1300x1300 mm",
          "1300x2500 mm",
          "Customized",
        ],
      },
      { label: "Laser Tube", value: ["80W", "100W", "130W", "150W", "200W"] },
      {
        label: "Laser Source",
        value: "Sealed Glass Co2 Laser Tube",
      },
      {
        label: "Application",
        value: [
          "Acrylic Cutting",
          "MDF Cutting",
          "Gift Artical",
          "Leather Cutting",
          "Stone Engraving",
          "Fabric Cutting",
          "Rubber Engraving",
          "Trophy",
          "Sign Board",
        ],
      },
      { label: "Cooling System", value: "Water Cooling" },
      { label: "Working Table", value: "Strip / Honey Comb" },
      { label: "Operating System", value: "Windows 10" },
      { label: "Interface", value: "Udisk, Usb, Ethernet" },
      { label: "Supported File", value: "PLT, DXF, BMP, JPG, GLF, PNG." },
      {
        label: "Working Volt",
        value: "Single Phase 220-230V/50HZ (Earthing Req)",
      },
    ],
    features: [
      "Auto-focus system",
      "Red dot pointer for precise positioning",
      "CCD camera option for print and cut",
      "Honeycomb or knife table options",
      "Air assist system",
      "Rotary attachment for cylindrical objects",
      "Automatic material height detection",
      "Pass-through design for long materials",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/co2-laser-cutting&engraving-machine.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/co2-laser-cutting&engraving-machine.webp",
        alt: "CO2 Laser Cutting & Engraving Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/application/1.webp",
        alt: "Acrylic signage cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/application/2.webp",
        alt: "Wood engraving",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/application/3.webp",
        alt: "Leather goods manufacturing",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/application/4.webp",
        alt: "Fabric cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-cutting-engraving-machine/application/5.webp",
        alt: "Packaging prototype",
      },
    ],
    popular: true,
  },
  {
    id: "co2-laser-engraving",
    name: "CO2 Laser Engraving Machine",
    slug: "co2-laser-engraving-machine",
    shortDescription: "Specialized for detailed engraving on various materials",
    description:
      "Our CO2 Laser Engraving Machine is optimized for high-detail engraving on a wide range of non-metal materials. With precise beam control and advanced motion systems, it creates intricate designs, text, and images with exceptional quality. Perfect for personalization, awards, signage, and artistic applications.",
    category: "Engraving",
    specifications: [
      {
        label: "Engraving Area",
        value: ["150x150 mm", "300x300 mm", "Customized"],
      },
      { label: "Laser Power", value: ["30W", "60W", "100W"] },
      { label: "Laser Source", value: "Metal Tube With Air Cooled" },
      { label: "Power Adjustment", value: "1 To 100%" },
      { label: "Engraving Accuracy", value: "<0.01" },
      { label: "Operting System", value: "Windows 10" },
      { label: "Interface", value: "Udisk,Usb,Ethernet" },
      { label: "Supported File", value: "PLT,DXF, BMP, JPG, GLF, PNG." },
      {
        label: "Working Volt",
        value: "Single Phase 220-230V/50HZ (Earthing Req)",
      },
      { label: "Optional Attachment", value: "Rotary Device" },
      { label: "Dimension (L X W X H)", value: "3 x 2 x 4 Feet" },
      { label: "Weight", value: "125kg" },
    ],
    features: [
      "Auto-focus system",
      "Red dot pointer for precise positioning",
      "Grayscale engraving capability",
      "Rotary attachment for cylindrical objects",
      "Air assist system",
      "Automatic material height detection",
      "Multiple job memory storage",
      "User-friendly control software",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/co2-laser-engraving-machine-1.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/co2-laser-engraving-machine-1.webp",
        alt: "CO2 Laser Engraving Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/application/1.webp",
        alt: "Trophy and award engraving",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/application/2.webp",
        alt: "Photo engraving on wood",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/application/3.webp",
        alt: "Personalized gift items",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/application/4.webp",
        alt: "Rubber stamp making",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/co2-laser-engraving-machine/application/5.webp",
        alt: "Acrylic signage",
      },
    ],
    popular: false,
  },
  {
    id: "uv-laser-marking",
    name: "UV Laser Marking Machine",
    slug: "uv-laser-marking-machine",
    shortDescription: "Cold marking for sensitive materials and plastics",
    description:
      "Our UV Laser Marking Machine utilizes ultraviolet wavelength for cold processing of sensitive materials. The non-thermal marking process is ideal for heat-sensitive components, plastics, and medical devices. It creates high-contrast, permanent marks without material damage or carbonization.",
    category: "Marking",
    materials: [
      "Electronic",
      "Cosmetic",
      "Glass",
      "Crystal",
      "PCB",
      "Semi Conductor",
      "Paper Board",
    ],
    specifications: [
      {
        label: "Working Area",
        value: ["100x100 mm", "175x175 mm", "300x300 mm", "Customized"],
      },
      { label: "Laser Power", value: ["3W", "5W", "10W", "15W"] },
      {
        label: "Supported File Formats",
        value: "PLT, DXF, JPG, PNG.",
      },
      {
        label: "Working Voltage",
        value: "Single Phase 220-230V/50HZ (Earthing Req)",
      },
      { label: "Dimension (L X W X H)", value: "3 x 4 x 4 feet" },
      { label: "Weight", value: "150kg" },
    ],
    features: [
      "Cold marking process",
      "High-contrast marking on plastics",
      "No material carbonization",
      "Automatic focus control",
      "Vision positioning system option",
      "Rotary attachment for cylindrical objects",
      "Class 1 laser safety enclosure",
      "Fume extraction system",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/uv-laser-marking-machine.webp?ver=1742728463",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/uv-laser-marking-machine.webp?ver=1742736232",
        alt: "UV Laser Marking Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/application/1.webp",
        alt: "Electronic component marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/application/2.webp",
        alt: "Medical device traceability",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/application/3.webp",
        alt: "Pharmaceutical packaging",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/application/4.webp",
        alt: "Plastic part identification",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/uv-laser-marking-machine/application/5.webp",
        alt: "Glass marking",
      },
    ],
    popular: false,
  },
  {
    id: "3d-marking",
    name: "3D Laser Marking Machine",
    slug: "3d-laser-marking-machine",
    shortDescription: "Advanced marking on curved and irregular surfaces",
    description:
      "Our 3D Laser Marking Machine features advanced galvo control and 3D focusing capabilities for marking on curved, irregular, or multi-level surfaces. The dynamic focus adjustment ensures consistent mark quality regardless of surface topography, making it ideal for complex parts and components.",
    category: "Marking",
    specifications: [
      {
        label: "Working Area",
        value: ["100x100 mm"],
      },
      { label: "Laser Type", value: "Fiber Laser" },
      { label: "Laser Power", value: ["60 W Optional 80 W", "100 W"] },
      {
        label: "Supported File Formats",
        value: "PLT, SVG, DXF JPEG, BMP, PNG etc.",
      },
    ],
    features: [
      "Dynamic focus control",
      "3D surface mapping",
      "Automatic height detection",
      "Multi-axis control option",
      "3D model import capability",
      "Vision system for part recognition",
      "Rotary attachment for cylindrical objects",
      "Advanced 3D software interface",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/3d-marking.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/3d-marking.webp",
        alt: "3D Laser Marking Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/application/1.webp",
        alt: "Curved surface marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/application/2.webp",
        alt: "Automotive component marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/application/3.webp",
        alt: "Multi-level part marking",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/3d-marking/application/4.webp",
        alt: "Complex geometry marking",
      },
    ],
    popular: false,
  },
  {
    id: "die-mould-welding",
    name: "Die Mould Laser Welding Machine",
    slug: "die-mould-laser-welding-machine",
    shortDescription: "Specialized for mold repair and modification",
    description:
      'Our Die Mould Laser Welding Machine is specifically designed for precision repair and modification of molds, dies, and tooling. The microscope-guided system allows for extremely precise deposition of material to repair worn areas, modify surfaces, or add features to existing tools, extending their service life and reducing replacement costs.",  or add features to existing tools, extending their service life and reducing replacement costs.',
    category: "Welding",
    specifications: [
      { label: "Laser Type", value: "Nd:YAG Laser/Fiber Laser" },
      { label: "Laser Power", value: ["200W", "400W"] },
      { label: "Laser Wavelength", value: "1064 NM" },
      { label: "Power Adjusting Range", value: "1~200 A" },
      { label: "Working Table Size", value: "600x600 mm" },
      { label: "Electric Requirement", value: "Three Phase" },
    ],
    features: [
      "Stereo microscope for precise visualization",
      "Joystick-controlled XYZ motion",
      "Pulse shaping technology",
      "Wire feeder option",
      "Argon gas protection system",
      "Adjustable pulse parameters",
      "Ergonomic design for operator comfort",
      "Integrated cooling system",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/die-mould-welding.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/die-mould-welding.webp",
        alt: "Die Mould Laser Welding Machine - Front View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/application/1.webp",
        alt: "Mold repair",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/application/2.webp",
        alt: "Die modification",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/application/3.webp",
        alt: "Tool edge restoration",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/die-mould-welding/application/4.webp",
        alt: "Texture addition",
      },
      { url: "/placeholder.svg?height=400&width=400", alt: "Cavity repair" },
    ],
    popular: false,
  },
  {
    id: "jewellery-cutting",
    name: "Jewellery Laser Cutting Machine",
    slug: "jewellery-laser-cutting-machine",
    shortDescription: "Precision cutting for precious metals and materials",
    description:
      "Our Jewellery Laser Cutting Machine offers exceptional precision for cutting intricate designs in precious metals and materials. The high-power density laser beam creates clean, narrow cuts with minimal material loss, making it ideal for valuable materials. Perfect for jewelry manufacturers, custom designers, and precious metal fabricators.",
    category: "Cutting",
    materials: ["Gold", "Silver", "Platinum", "Palladium", "Titanium"],
    specifications: [
      {
        label: "Cutting Size",
        value: ["100x100 mm", "Customized"],
      },
      { label: "Laser Type", value: "German Source" },
      { label: "Cutting Depth", value: "0.01 Micron - 1.5mm" },
      { label: "Optional Attachment", value: "Rotary / Fume Extractor" },
      {
        label: "Working Volt",
        value: "Single Phase 220-230V / 50HZ (Earthing Req)",
      },
    ],
    features: [
      "High-precision galvo scanning system",
      "Red dot pointer for alignment",
      "Fume extraction system",
      "Automatic focus control",
      "Material library for quick setup",
      "Minimal heat-affected zone",
      "Compact design for jewelry workshops",
      "Low operating costs",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/jewellery-cutting-machine-1.webp",
    images: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/jewellery-cutting-machine-1.webp",
        alt: "Jewellery Laser Cutting Machine - Front View",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/jewellery-cutting-machine-2.webp",
        alt: "Jewellery Laser Cutting Machine - Side View",
      },
    ],
    applicationImages: [
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/application/2.webp",
        alt: "Intricate gold pattern cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/application/3.webp",
        alt: "Silver filigree work",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/application/4.webp",
        alt: "Pendant design cutting",
      },
      {
        url: "https://www.dolphinlasermachine.com/images/inner-product/jewellery-cutting-machine/application/5.webp",
        alt: "Ring pattern cutting",
      },
    ],
    popular: false,
  },
  {
    id: "jewellery-soldering",
    name: "Jewellery Laser Soldering Machine",
    slug: "jewellery-laser-soldering-machine",
    shortDescription: "Contactless precision joining for jewelry",
    description:
      "Our Jewellery Laser Soldering Machine provides a contactless, precise method for joining delicate jewelry components. The focused laser beam delivers controlled heat exactly where needed, minimizing thermal impact on surrounding areas. Ideal for fine jewelry production, stone-in-place soldering, and repair work on valuable pieces.",
    category: "Soldering",
    materials: ["Gold", "Silver", "Platinum", "Palladium", "Titanium", "Brass"],
    specifications: [
      { label: "Laser Type", value: "ND Yag Pump Lamp" },
      { label: "Laser Power", value: "200 W (100, 400 W)" },
      { label: "Solder Joint", value: "0.2-2mm" },
      { label: "Optional Attachment", value: "CCD" },
      {
        label: "Working Volt",
        value: "Single Phase 220-230V / 50HZ (Earthing Req)",
      },
      { label: "Dimension (L X W X H)", value: "As per Customized" },
    ],
    features: [
      "New Creative Making Jewellery",
      "Faster production",
      "Saves Man Power time",
      "No Risk Jewellery Damage",
      "Argon gas protection system",
      "Touchscreen interface",
      "Programmable soldering recipes",
      "Foot pedal control",
    ],
    mainImage:
      "https://www.dolphinlasermachine.com/images/inner-product/jewellery-soldering-machine/jewellery-soldering-machine-1.webp",
    images: [
      {
        url: "/placeholder.svg?height=600&width=800",
        alt: "Jewellery Laser Soldering Machine - Front View",
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        alt: "Jewellery Laser Soldering Machine - Side View",
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        alt: "Jewellery Laser Soldering Machine - Control Panel",
      },
      {
        url: "/placeholder.svg?height=600&width=800",
        alt: "Jewellery Laser Soldering Machine - In Operation",
      },
    ],
    applicationImages: [
      {
        url: "/placeholder.svg?height=400&width=400",
        alt: "Fine jewelry soldering",
      },
      {
        url: "/placeholder.svg?height=400&width=400",
        alt: "Stone-in-place soldering",
      },
      {
        url: "/placeholder.svg?height=400&width=400",
        alt: "Chain link repair",
      },
      {
        url: "/placeholder.svg?height=400&width=400",
        alt: "Setting attachment",
      },
      { url: "/placeholder.svg?height=400&width=400", alt: "Clasp repair" },
      {
        url: "/placeholder.svg?height=400&width=400",
        alt: "Micro-component joining",
      },
    ],
    popular: false,
  },
];

// Categories for filtering
export const productCategories = [
  { value: "all", label: "All Products" },
  { value: "Marking", label: "Marking Machines" },
  { value: "Cutting", label: "Cutting Machines" },
  { value: "Welding", label: "Welding Machines" },
  { value: "Cutting & Engraving", label: "Cutting & Engraving Machines" },
  { value: "Engraving", label: "Engraving Machines" },
  { value: "Soldering", label: "Soldering Machines" },
];
