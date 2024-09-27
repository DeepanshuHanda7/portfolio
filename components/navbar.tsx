"use client";
import { Chip } from "@nextui-org/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute z-50 backdrop-blur rounded-full border border-slate-500/20 shadow-lg dark:shadow-slate-200/5 md:border-none md:shadow-none top-2 md:rounded-none md:static flex justify-around md:justify-between items-center  md:w-full min-h-[60px] px-5">
      <ul className="flex gap-4">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.href}>
              <NextLink href={item.href}>
                {isActive ? (
                  <div>
                    <Chip
                      classNames={{
                        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 hidden md:flex",
                        content:
                          "drop-shadow shadow-black text-white hidden md:flex",
                      }}
                      variant="shadow"
                    >
                      {item.label}
                    </Chip>

                    <Chip
                      classNames={{
                        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30 flex md:hidden",
                        content:
                          "drop-shadow shadow-black text-white flex md:hidden",
                      }}
                      variant="shadow"
                    >
                      {item.icon && <item.icon size={20} />}
                    </Chip>
                  </div>
                ) : (
                  <div>
                    <Chip
                      className="hidden md:flex text-gray-800 dark:text-gray-300"
                      color="default"
                      variant="shadow"
                    >
                      {item.label}
                    </Chip>
                    <Chip
                      className="flex md:hidden text-gray-700 dark:text-gray-300"
                      color="default"
                      variant="shadow"
                    >
                      {item.icon && <item.icon size={20} />}
                    </Chip>
                  </div>
                )}
              </NextLink>
            </div>
          );
        })}
        <ThemeSwitch className="md:hidden" />
      </ul>

      <ThemeSwitch className="hidden md:flex justify-end" />
    </div>
  );
};
