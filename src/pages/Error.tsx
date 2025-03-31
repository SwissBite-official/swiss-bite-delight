// Chocolate404.tsx
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Type Definition for Props ---
interface Chocolate404Props {
    /** The path to link the user back to (e.g., '/'). If omitted, no link is shown. */
    homePath?: string;
    /** Optional additional CSS class names for the main container. */
    className?: string;
    /** Optional inline styles for the main container. */
    style?: React.CSSProperties;
    /** Optional custom funny message. */
    message?: string;
    /** Optional custom link text. */
    linkText?: string;
}

/**
 * @component Chocolate404
 * @description A professional and appealing 404 'Page Not Found' component
 * with a Swiss chocolate theme and a humorous message. Includes an SVG
 * visualization of a broken chocolate bar.
 * **Note:** Styles embedded via <style> tag are globally scoped, prefixed with
 * 'ch404-' to reduce collision risk.
 *
 * @param {string} [homePath] - Path to link back to (e.g., '/'). No link if omitted.
 * @param {string} [className] - Optional additional CSS classes for the container.
 * @param {object} [style] - Optional inline styles for the container.
 * @param {string} [message] - Optional custom error message.
 * @param {string} [linkText] - Optional custom text for the home link.
 */
const Chocolate404: React.FC<Chocolate404Props> = ({
                                                       homePath,
                                                       className = '',
                                                       style = {},
                                                       message = "Oops! 404 - This page must've been snapped up like the last piece of SwissBite chocolate. Maybe check the URL or head back home?",
                                                       linkText = 'Go back home',
                                                   }) => {

    // Combine default and passed styles/classes
    const containerClasses = `ch404-container ${className}`.trim();
    const navigate = useNavigate();

    // --- Embedded CSS ---
    // WARNING: Global scope. Prefixed with 'ch404-' to mitigate collisions.
    const embeddedCss = `
    .ch404-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 20px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #333;
      min-height: 70vh; /* Ensure it takes up significant space */
      box-sizing: border-box;
    }

    .ch404-svg {
      max-width: 300px; /* Control max size */
      width: 70%;
      margin-bottom: 20px;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    }

    .ch404-piece {
      fill: #6B4226; /* Chocolate brown */
      stroke: #50301a; /* Darker edge */
      stroke-width: 0.5;
      /* Add subtle animation */
      animation: ch404-wiggle 6s ease-in-out infinite alternate;
    }

    .ch404-piece-left {
       animation-delay: 0s;
       transform-origin: bottom right;
    }

    .ch404-piece-right {
       animation-delay: -3s; /* Offset animation */
       transform-origin: top left;
    }

    .ch404-text {
      font-family: 'Arial Black', Gadget, sans-serif;
      font-size: 60px; /* Adjust as needed based on SVG size */
      font-weight: bold;
      fill: #FFFFFF; /* White text */
      paint-order: stroke; /* Ensure stroke is behind fill */
      stroke: #442a17; /* Dark outline for readability */
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .ch404-message {
      font-size: 1.1em;
      color: #555;
      max-width: 500px;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .ch404-link {
      display: inline-block;
      padding: 12px 25px;
      background-color: #D52B1E; /* Swiss red */
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .ch404-link:hover,
    .ch404-link:focus {
      background-color: #b22216; /* Darker red on hover */
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    /* Subtle wiggle animation for the broken pieces */
    @keyframes ch404-wiggle {
      0% {
        transform: rotate(0deg) translateX(0);
      }
      50% {
         transform: rotate(0.5deg) translateX(1px);
      }
      100% {
        transform: rotate(0deg) translateX(0);
      }
    }
  `;

    return (
        <div className={containerClasses} style={style}>
            {/* Inject the CSS string */}
            <style>{embeddedCss}</style>

            {/* SVG Visualization of Broken Chocolate Bar */}
            <svg
                className="ch404-svg"
                viewBox="0 0 120 100" // Adjusted viewBox for layout
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true" // Decorative
            >
                <title>404 Error - Broken Chocolate Bar</title>
                {/* Left Piece */}
                <g className="ch404-piece ch404-piece-left">
                    <path d="M 10,10 L 50,10 L 55,50 L 45,90 L 10,90 Z" />
                    <text x="22" y="65" className="ch404-text">4</text>
                </g>
                {/* Right Piece */}
                <g className="ch404-piece ch404-piece-right">
                    <path d="M 60,10 L 110,10 L 110,90 L 70,90 L 65,50 Z" />
                    <text x="70" y="45" className="ch404-text">0</text>
                    <text x="75" y="85" className="ch404-text">4</text>
                </g>
            </svg>

            {/* Error Message */}
            <p className="ch404-message">{message}</p>

            {/* Optional Link Home */}
            {homePath && (
                <a href={homePath} className="ch404-link">
                    {linkText}
                </a>
            )}
            <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors"
            >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Return Home
            </button>
        </div>
    );
};

export default Chocolate404;

