import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import cplus from '../../../public/c++.jpeg'
import tailwind from '../../../public/tailwindcss.png'
import bootstrap from '../../../public/bootstrap.png'
import shadcn from '../../../public/shadcn.png'
import webpack from '../../../public/webpack.png'
import vitejs from '../../../public/vitejs.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import figma from '../../../public/figma.png'
import pts from '../../../public/pts.png'
import jira from '../../../public/jira.png'
import postman from '../../../public/postman.png'
import bitbucket from '../../../public/bitbucket.png'
import git from '../../../public/git.png'
import mysql from '../../../public/mysql.png'
import sqlserver from '../../../public/sqlserver.png'
import supabase from '../../../public/supabase.png'
import postgresql from '../../../public/postgresql.png'
import nodejs from '../../../public/nodejs.png'
import express from '../../../public/express.png'
import nestjs from '../../../public/nestjs.png'
import dotnet from '../../../public/dotnet.png'
import jquery from '../../../public/jquery.png'
import shopify from '../../../public/shopify.png'
import python from '../../../public/python.png'
import graphql from '../../../public/graphql.png'
import csharp from '../../../public/csharp.png'
import sql from '../../../public/sql.png'

import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {

    const language = [
        {alt:"html", img:html},
        {alt:"css", img:css},
        {alt:"js", img:js},
        {alt:"ts", img:ts},
        {alt:"python", img:python},
        {alt:"graphql", img:graphql},
        {alt:"c#", img:csharp},
        {alt:"sql", img:sql},
        // {alt:"cplus", img:cplus},
    ]
    const framework = [
        {alt:"react", img:react},
        {alt:"nextjs", img:nextjs},
        {alt:"scss", img:scss},
        {alt:"tailwind", img:tailwind},
        {alt:"shadcn", img:shadcn},
        {alt:"bootstrap", img:bootstrap},
        {alt:"shopify", img:shopify},
        {alt:"jquery", img:jquery},
        {alt:"dotnet", img:dotnet},
        {alt:"nodejs", img:nodejs},
        {alt:"express", img:express},
        {alt:"nestjs", img:nestjs},
        {alt:"vitejs", img:vitejs},
        {alt:"webpack", img:webpack},
    ]
       
    const databases = [
        {alt:"mysql", img:mysql},
        {alt:"postgresql", img:postgresql},
        {alt:"sqlserver", img:sqlserver},
        {alt:"supabase", img:supabase},
    ]

    const tools = [
        {alt:"git", img:git},
        {alt:"github", img:github},
        {alt:"bitbucket", img:bitbucket},
        {alt:"vscode", img:vscode},
        {alt:"postman", img:postman},
        {alt:"jira", img:jira},
        {alt:"figma", img:figma},
        {alt:"pts", img:pts},
    ]
  return (
    // SKILLS PAGE
    <div className="min-h-full w-full relative flex flex-col items-start gap-5 overflow-hidden py-6">
      <Badge className="text-primary-text gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary-text max-sm:text-lg">
            Software Engineer with a comprehensive foundation in modern web development technologies, 
            specializing in building responsive web applications using React and Next.js. Proficient 
            in both frontend and backend development with expertise in JavaScript, TypeScript, and 
            Node.js, complemented by experience with various SQL databases. Passionate about delivering 
            high-performance solutions and staying current with emerging technologies to drive 
            innovation and efficiency.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block py-2">
          <h1 className="gap-2 text-xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full gap-4 h-fit flex-row flex justify-start items-center flex-wrap">
            <SkillsFooter items={language} />
          </div>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block py-2">
          <h1 className="gap-2 text-xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Platforms
          </h1>
          <div className="w-full gap-4 h-fit flex-row flex justify-start items-center flex-wrap">
            <SkillsFooter items={framework} />
          </div>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block py-2">
          <h1 className="gap-2 text-xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Database Management Systems
          </h1>
          <div className="w-full gap-4 h-fit flex-row flex justify-start items-center flex-wrap">
            <SkillsFooter items={databases} />
          </div>
        </FramerWrapper>
        <FramerWrapper  className="block py-2" y={100} delay={0.32}>
          <h1 className="gap-2 text-xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Development Tools & Technologies
          </h1>
          <div className="w-full gap-4 h-fit flex-row flex justify-start items-center flex-wrap">
            <SkillsFooter items={tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
