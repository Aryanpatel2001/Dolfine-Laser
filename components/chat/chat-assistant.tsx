import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Bot, X, User, Send } from "lucide-react";
import { cn } from "../../lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Size {
  width: number;
  height: number;
}

type ResizeHandle = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState<Size>({ width: 400, height: 400 });
  const [isResizing, setIsResizing] = useState(false);
  const [activeHandle, setActiveHandle] = useState<ResizeHandle | null>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const initialMousePos = useRef<{ x: number; y: number } | null>(null);
  const initialSize = useRef<Size | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        !isResizing ||
        !resizeRef.current ||
        !initialMousePos.current ||
        !initialSize.current ||
        !activeHandle
      )
        return;

      const deltaX = e.clientX - initialMousePos.current.x;
      const deltaY = e.clientY - initialMousePos.current.y;

      let newWidth = initialSize.current.width;
      let newHeight = initialSize.current.height;

      switch (activeHandle) {
        case "bottom-right":
          newWidth += deltaX;
          newHeight += deltaY;
          break;
        case "bottom-left":
          newWidth -= deltaX;
          newHeight += deltaY;
          break;
        case "top-right":
          newWidth += deltaX;
          newHeight -= deltaY;
          break;
        case "top-left":
          newWidth -= deltaX;
          newHeight -= deltaY;
          break;
      }

      // Constrain size
      newWidth = Math.max(300, Math.min(800, newWidth));
      newHeight = Math.max(300, Math.min(800, newHeight));

      setSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setActiveHandle(null);
      initialMousePos.current = null;
      initialSize.current = null;
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, activeHandle]);

  const startResize = (e: React.MouseEvent, handle: ResizeHandle) => {
    e.preventDefault();
    setIsResizing(true);
    setActiveHandle(handle);
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    initialSize.current = size;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "This is a simulated response. Replace with actual API call.",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const formatMessage = (content: string) => {
    return content.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== content.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className={cn(
              "fixed bottom-4 right-4 p-4 bg-[#1a5f7a] text-white rounded-full shadow-lg",
              "hover:bg-[#154d63] transition-all duration-300",
              "flex items-center justify-center gap-2",
              "z-50"
            )}
          >
            <MessageCircle size={24} />
            <span className="hidden md:inline">Chat with us</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={resizeRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              width: size.width,
              height: size.height,
            }}
            className="fixed bottom-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
          >
            {/* Resize handles */}
            <div
              className="absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-50 group"
              onMouseDown={(e) => startResize(e, "top-left")}
            >
              <div className="w-2 h-2 bg-[#1a5f7a] group-hover:bg-[#154d63] rounded-full absolute top-1 left-1 transition-colors" />
            </div>
            <div
              className="absolute top-0 right-0 w-4 h-4 cursor-ne-resize z-50 group"
              onMouseDown={(e) => startResize(e, "top-right")}
            >
              <div className="w-2 h-2 bg-[#1a5f7a] group-hover:bg-[#154d63] rounded-full absolute top-1 right-1 transition-colors" />
            </div>
            <div
              className="absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize z-50 group"
              onMouseDown={(e) => startResize(e, "bottom-left")}
            >
              <div className="w-2 h-2 bg-[#1a5f7a] group-hover:bg-[#154d63] rounded-full absolute bottom-1 left-1 transition-colors" />
            </div>
            <div
              className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50 group"
              onMouseDown={(e) => startResize(e, "bottom-right")}
            >
              <div className="w-2 h-2 bg-[#1a5f7a] group-hover:bg-[#154d63] rounded-full absolute bottom-1 right-1 transition-colors" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#1a5f7a] to-[#154d63] text-white">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <div>
                  <h3 className="font-semibold">Dolphin Laser Assistant</h3>
                  <p className="text-xs text-gray-200">
                    Ask me anything about our products
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="overflow-y-auto p-4 space-y-4 bg-gray-50"
              style={{ height: `calc(${size.height}px - 140px)` }}
            >
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-8"
                >
                  <Bot size={48} className="mx-auto mb-4 text-[#1a5f7a]" />
                  <h4 className="text-lg font-semibold text-[#1a5f7a] mb-2">
                    Welcome to Dolphin Laser
                  </h4>
                  <p className="text-gray-600">
                    How can I help you with our laser machine products?
                  </p>
                </motion.div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "flex gap-2",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-[#1a5f7a]/10 flex items-center justify-center flex-shrink-0">
                      <Bot size={18} className="text-[#1a5f7a]" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] p-4 rounded-2xl shadow-sm",
                      message.role === "user"
                        ? "bg-gradient-to-br from-[#1a5f7a] to-[#154d63] text-white rounded-br-none"
                        : "bg-white text-gray-800 rounded-bl-none border border-gray-100"
                    )}
                  >
                    {formatMessage(message.content)}
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-[#1a5f7a] flex items-center justify-center flex-shrink-0">
                      <User size={18} className="text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a5f7a]/10 flex items-center justify-center flex-shrink-0">
                    <Bot size={18} className="text-[#1a5f7a]" />
                  </div>
                  <div className="bg-white text-gray-800 max-w-[80%] p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#1a5f7a] rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-[#1a5f7a] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-[#1a5f7a] rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="p-4 bg-white border-t border-gray-100"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 border border-gray-200 rounded-full focus:outline-none focus:border-[#1a5f7a] focus:ring-2 focus:ring-[#1a5f7a]/20"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "p-3 bg-gradient-to-r from-[#1a5f7a] to-[#154d63] text-white rounded-full",
                    "hover:from-[#154d63] hover:to-[#0f3a4a] transition-all duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center"
                  )}
                >
                  <Send size={20} />
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
