import React from "react";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import { personalInfo } from "../constants";
import SyntaxCVSectionLayout from "./SyntaxCVSectionLayout";

const stats = [
  { value: "100%", label: "On-Time Delivery", sub: "Consistent Project Track Record" },
  { value: "20%", label: "Team Efficiency", sub: "Collaborative Tools Boost" },
  { value: "+30%", label: "Transaction Speed", sub: "API & Query Optimization" },
  { value: "10%", label: "Cost Savings", sub: "Budget Management Success" },
];

const About = () => {
  return (
    <SyntaxCVSectionLayout id="about" number="01." title="about">
      <div className="space-y-8">
        {/* Main Bio Text matching Syntax CV typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <p className="text-2xl sm:text-[28px] md:text-[30px] text-white font-light leading-[1.5] tracking-tight">
            I’m <span className="font-bold text-white">{personalInfo.name}</span>, a dedicated and results-driven <span className="text-[#00ffae] font-semibold">Software Developer &amp; Freelance .NET Specialist</span> with a proven track record in custom software development, cloud computing, and enterprise web applications. After engineering enterprise systems at <span className="text-white font-semibold">Autviz Solutions</span> and <span className="text-white font-semibold">CS Soft Solutions</span>, I develop scalable solutions as an independent freelance developer and consultant, available for global client contracts.
          </p>

          <p className="text-lg sm:text-xl text-[#a3a3a3] font-normal leading-[1.7]">
            Across production engagements, I have engineered <span className="text-white font-semibold">Microsoft Azure AI Chatbot integrations</span> across US, UK, Canada, and Europe, designed <span className="text-white font-semibold">Shopify Review Generation Microservices</span> with Ocelot API Gateway and Angular 17, and developed high-throughput <span className="text-white font-semibold">Loan Management CRMs</span> with SQL Server stored procedures. Along with my enterprise systems, I showcase full-scale platforms like <span className="text-white font-semibold">Karto</span>, live on Google Play. My core engineering philosophy focuses on 100% on-time delivery, clean architecture, and measurable performance gains.
          </p>
        </motion.div>

        {/* Stats Row in Syntax CV card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-3">
          {stats.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 sm:p-6 rounded-xl border border-white/[0.12] border-b-2 border-b-white/[0.2] bg-white/[0.02] hover:border-[#00ffae] hover:border-b-[#00ffae] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white group-hover:text-[#00ffae] transition font-mono tracking-tight">
                {st.value}
              </div>
              <div className="text-base font-semibold text-white mt-2">
                {st.label}
              </div>
              <div className="text-xs sm:text-sm text-[#949494] font-mono mt-1">
                {st.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action CTAs matching Syntax CV with rotating 45deg hover arrow */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 rounded-lg bg-[#00ffae] text-black font-semibold text-sm font-mono flex items-center gap-2 hover:bg-[#00ffae]/90 shadow-[0_0_20px_rgba(0,255,174,0.3)] transition"
          >
            <span>Download Curriculum Vitae</span>
            <RiArrowRightUpLine
              size={17}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </a>

          <a
            href="#contact"
            className="group px-6 py-3 rounded-lg border border-white/[0.15] border-b-2 hover:border-[#00ffae] hover:text-[#00ffae] text-white text-sm font-mono font-medium transition-all duration-300 flex items-center gap-2"
          >
            <span>Get In Touch</span>
            <RiArrowRightUpLine
              size={17}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </SyntaxCVSectionLayout>
  );
};

export default About;
