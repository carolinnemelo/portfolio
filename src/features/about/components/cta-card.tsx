import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type CTACardProps = {
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
};

export function CTACard({
  title,
  description,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}: CTACardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden">
      <CardContent className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a 
            href={primaryBtnLink}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-600 transition w-full sm:w-auto text-center"
          >
            {primaryBtnText}
          </motion.a>
          <motion.a 
            href={secondaryBtnLink}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-white text-slate-800 font-semibold rounded-md hover:bg-slate-50 transition border border-slate-200 w-full sm:w-auto text-center"
          >
            {secondaryBtnText}
          </motion.a>
        </div>
      </CardContent>
    </Card>
  );
}