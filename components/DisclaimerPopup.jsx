"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, delay: 0.1 }
    }
};

const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 30
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    }
};

const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
};

const buttonVariants = {
    hover: {
        scale: 1.03,
        y: -2,
        transition: { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
    },
    tap: {
        scale: 0.98,
        y: 0
    }
};

export default function DisclaimerPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem("manjam-disclaimer-accepted");
        if (!hasAccepted) {
            setIsOpen(true);
            document.body.style.overflow = "hidden";
        }
    }, []);

    const handleContinue = () => {
        localStorage.setItem("manjam-disclaimer-accepted", "true");
        setIsOpen(false);
        document.body.style.overflow = "unset";
    };

    const handleReturn = () => {
        window.location.href = "https://www.google.com";
    };

    const handleClose = () => {
        handleReturn();
    };

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white rounded-2xl shadow-2xl max-w-[700px] w-[92%] max-h-[90vh] overflow-y-auto mx-4"
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={handleClose}
                            whileHover={{ rotate: 90, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
                            aria-label="Close"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.button>

                        {/* Content */}
                        <div className="p-6 sm:p-8 md:p-10">
                            {/* Title */}
                            <motion.h2
                                variants={contentVariants}
                                className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1C4A3F] mb-6 pr-8"
                            >
                                Important Disclaimer
                            </motion.h2>

                            {/* Disclaimer Text */}
                            <motion.div
                                variants={contentVariants}
                                className="space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed"
                            >
                                <p>
                                    By clicking "<span className="text-[#46B886] font-semibold">Continue</span>", you confirm that you have read and understood this disclaimer, and that you are accessing this website as a professional, qualified, or otherwise sophisticated investor.
                                </p>

                                <p>
                                    This website and the information made available on it are provided solely for general informational purposes and should not be construed as investment, financial, legal, accounting, or tax advice. Nothing on this website constitutes an offer, solicitation, commitment, or recommendation to acquire or dispose of any financial product, service, or security in any jurisdiction. The information presented may be subject to change without notice, may be incomplete or condensed, and should not be relied upon as a basis for any contract or investment decision.
                                </p>

                                <p>
                                    Visitors are solely responsible for independently evaluating the accuracy, adequacy, and relevance of the information presented and are strongly advised to obtain independent legal, tax, and financial advice prior to making any investment or business decision. This website is intended exclusively for professional, qualified, or otherwise sophisticated investors with the necessary expertise to assess the risks involved and is not directed to retail clients or the general public. Distribution to, or reliance by, any other person is unauthorized and may be restricted or prohibited under applicable laws.
                                </p>
                            </motion.div>

                            {/* Buttons */}
                            <motion.div
                                variants={contentVariants}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8"
                            >
                                {/* Return Button */}
                                <motion.button
                                    onClick={handleReturn}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm order-2 sm:order-1 bg-white/10 backdrop-blur-xl border border-[#1C4A3F]/20 text-[#1C4A3F]"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(28, 74, 63, 0.08) 0%, rgba(70, 184, 134, 0.08) 100%)",
                                        boxShadow: "0 4px 24px -1px rgba(28, 74, 63, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
                                    }}
                                >
                                    <motion.svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        animate={{ x: 0 }}
                                        whileHover={{ x: -3 }}
                                    >
                                        <path
                                            d="M11.25 13.5L6.75 9L11.25 4.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                    RETURN
                                </motion.button>

                                {/* Continue Button */}
                                <motion.button
                                    onClick={handleContinue}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white order-1 sm:order-2"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(70, 184, 134, 0.9) 0%, rgba(28, 74, 63, 0.95) 100%)",
                                        boxShadow: "0 4px 24px -1px rgba(70, 184, 134, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                                        backdropFilter: "blur(12px)",
                                    }}
                                >
                                    CONTINUE
                                    <motion.svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        animate={{ x: 0 }}
                                        whileHover={{ x: 3 }}
                                    >
                                        <path
                                            d="M6.75 13.5L11.25 9L6.75 4.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
