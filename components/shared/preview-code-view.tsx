"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import Preview from "./preview";
import Code from "./code";

import { VscOpenPreview } from "react-icons/vsc";
import { FaCheck, FaCode, FaCopy, FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import MyTooltip from "./my-tooltip";

interface PreviewCodeViewProps {
  preview: React.ReactElement;
  code: string;
  installationCommands: Array<string>;
}

const PreviewCodeView: React.FC<PreviewCodeViewProps> = ({
  preview,
  code,
  installationCommands,
}) => {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCommandCopied, setIsCommandCopied] = useState<number | null>(null);

  setTimeout(() => {
    setIsCopied(false);
    setIsCommandCopied(null);
  }, 1000);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          <MyTooltip tooltipString="React + Shadcn/ui">
            <div className="flex items-center justify-center gap-2">
              <SiShadcnui className="h-3 w-3" />
              <FaReact className="h-3 w-3" />
              <p className="text-md">Code</p>
            </div>
          </MyTooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-3xl">
        <DialogHeader>
          <DialogTitle>Preview / Code - View</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>
                You can copy - paste the below code directly into your react
                application.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                  setIsCopied(true);
                  toast({
                    title: "Code copied to your clipboard.",
                    description: "Don't forget to give a star on github 😁.",
                  });
                }}
                asChild
              >
                {isCopied ? (
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaCheck />
                    <p>Copied</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaCopy />
                    <p>Copy Code</p>
                  </div>
                )}
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <Tabs defaultValue="code" className="w-full">
            <TabsList>
              <TabsTrigger value="code">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer">
                  <FaCode />
                  <p>Code</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="preview" asChild>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer">
                  <VscOpenPreview />
                  <p>Preview</p>
                </div>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="mt-4" asChild>
              <div className="max-w-full">
                <Preview Element={preview} />
              </div>
            </TabsContent>
            <TabsContent value="code" asChild>
              <div className="">
                <MyTooltip tooltipString="Click to copy">
                  <div className="my-4 space-y-3 p-2">
                    <div>
                      <p className="text-xl font-bold">Installation</p>
                      <p className="text-xs text-gray-400">
                        These are the required shadcn components to be added in
                        order to error free render.
                      </p>
                    </div>
                    <ul className="my-2">
                      {installationCommands.map((command, index) => (
                        <li
                          key={index}
                          className="cursor-pointer my-4"
                          onClick={() => {
                            navigator.clipboard.writeText(command);
                            setIsCommandCopied(index);
                            toast({
                              title: "Command copied successfully.",
                            });
                          }}
                        >
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex items-start"
                            asChild
                          >
                            <div className="flex items-center justify-between font-medium">
                              <p className="text-xs overflow-x-scroll no-scrollbar line-clamp-1 w-[90%]">
                                {command}
                              </p>

                              {isCommandCopied === index ? (
                                <FaCheck />
                              ) : (
                                <FaCopy />
                              )}
                            </div>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MyTooltip>

                <div className="rounded-3xl border max-w-[21rem] sm:max-w-md md:max-w-2xl lg:max-w-full h-[300px] overflow-scroll no-scrollbar">
                  <Code code={code} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewCodeView;
