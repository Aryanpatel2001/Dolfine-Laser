// import React, { useState, useRef, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { MessageCircle, Bot, X, User, Send } from "lucide-react";
// import { cn } from "../../lib/utils";

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// interface Size {
//   width: number;
//   height: number;
// }

// type ResizeHandle = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// export function ChatAssistant1() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<
//     Array<{ role: "user" | "assistant"; content: string }>
//   >([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const [size, setSize] = useState<Size>({ width: 400, height: 400 });
//   const [isResizing, setIsResizing] = useState(false);
//   const [activeHandle, setActiveHandle] = useState<ResizeHandle | null>(null);
//   const resizeRef = useRef<HTMLDivElement>(null);
//   const initialMousePos = useRef<{ x: number; y: number } | null>(null);
//   const initialSize = useRef<Size | null>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (
//         !isResizing ||
//         !resizeRef.current ||
//         !initialMousePos.current ||
//         !initialSize.current ||
//         !activeHandle
//       )
//         return;

//       const deltaX = e.clientX - initialMousePos.current.x;
//       const deltaY = e.clientY - initialMousePos.current.y;

//       let newWidth = initialSize.current.width;
//       let newHeight = initialSize.current.height;

//       switch (activeHandle) {
//         case "bottom-right":
//           newWidth += deltaX;
//           newHeight += deltaY;
//           break;
//         case "bottom-left":
//           newWidth -= deltaX;
//           newHeight += deltaY;
//           break;
//         case "top-right":
//           newWidth += deltaX;
//           newHeight -= deltaY;
//           break;
//         case "top-left":
//           newWidth -= deltaX;
//           newHeight -= deltaY;
//           break;
//       }

//       // Constrain size
//       newWidth = Math.max(300, Math.min(800, newWidth));
//       newHeight = Math.max(300, Math.min(800, newHeight));

//       setSize({ width: newWidth, height: newHeight });
//     };

//     const handleMouseUp = () => {
//       setIsResizing(false);
//       setActiveHandle(null);
//       initialMousePos.current = null;
//       initialSize.current = null;
//     };

//     if (isResizing) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isResizing, activeHandle]);

//   const startResize = (e: React.MouseEvent, handle: ResizeHandle) => {
//     e.preventDefault();
//     setIsResizing(true);
//     setActiveHandle(handle);
//     initialMousePos.current = { x: e.clientX, y: e.clientY };
//     initialSize.current = size;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading) return;

//     const userMessage = input.trim();
//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to get response");
//       }

//       const data = await response.json();
//       if (data.error) {
//         throw new Error(data.error);
//       }

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.response },
//       ]);
//     } catch (error) {
//       console.error("Chat error:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "I apologize, but Im experiencing technical difficulties. Please email support@dolphinlaser.com or try again later.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const formatMessage = (content: string) => {
//     const paragraphs = content.split("\n").filter((p) => p.trim());

//     return (
//       <div className="space-y-3">
//         {paragraphs.map((paragraph, idx) => {
//           // 1️⃣ Convert URLs into clickable links
//           const linkRegex = /(https?:\/\/[^\s]+)/g;
//           paragraph = paragraph.replace(
//             linkRegex,
//             '<a href="$1" target="_blank" class="text-blue-500 underline">$1</a>'
//           );

//           // 2️⃣ Format bullet lists ( - item or * item )
//           if (/^[-*]\s/.test(paragraph.trim())) {
//             return (
//               <div key={idx} className="flex items-start gap-2">
//                 <span className="text-[#1a5f7a] mt-1">•</span>
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph.trim().replace(/^[-*]\s*/, ""),
//                   }}
//                 />
//               </div>
//             );
//           }

//           // 3️⃣ Format numbered lists ( 1. item )
//           if (/^\d+\.\s/.test(paragraph.trim())) {
//             return (
//               <div key={idx} className="flex items-start gap-2">
//                 <span className="font-bold">
//                   {paragraph.trim().split(" ")[0]}
//                 </span>
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: paragraph.trim().replace(/^\d+\.\s*/, ""),
//                   }}
//                 />
//               </div>
//             );
//           }

//           // 4️⃣ Format code blocks ( ```code``` )
//           if (paragraph.startsWith("```") && paragraph.endsWith("```")) {
//             return (
//               <pre
//                 key={idx}
//                 className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto"
//               >
//                 <code>{paragraph.replace(/```/g, "")}</code>
//               </pre>
//             );
//           }

//           // 5️⃣ Apply basic HTML formatting for normal text
//           return (
//             <p
//               key={idx}
//               className="leading-relaxed"
//               dangerouslySetInnerHTML={{ __html: paragraph }}
//             />
//           );
//         })}
//       </div>
//     );
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return <></>;
// }
