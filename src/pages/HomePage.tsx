// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { motion, useReducedMotion, type Variants, type TargetAndTransition } from "framer-motion";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
// };

// const fadeLeft: Variants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// };

// const fadeRight: Variants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// };

// const staggerContainer: Variants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
// };

// const cardItem: Variants = {
//   hidden: { opacity: 0, y: 60, scale: 0.92 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
// };

// const viewportOnce = { once: true, amount: 0.2 } as const;

// const navigationItems = ["Menu", "Events", "Gallery", "About", "Contact"];

// const heroSocialLinks = [
//   {
//     alt: "Facebook",
//     bordered: true,
//     image: "/figmaAssets/image-1-1.png",
//     imageClassName: "h-[29px] w-[29px] object-cover",
//   },
//   {
//     alt: "Instagram",
//     bordered: true,
//     image: "/figmaAssets/icons8-instagram-2.svg",
//     imageClassName: "h-6 w-6",
//   },
//   {
//     alt: "Twitter",
//     bordered: true,
//     image: "/figmaAssets/image-3.png",
//     imageClassName: "h-[29px] w-[29px] object-cover",
//   },
// ];

// const specialDishes = [
//   {
//     title: "Chicken Karai",
//     description:
//       "Tender chicken cooked in our signature desi style with traditional spices and fresh coriander",
//     image: "/figmaAssets/dish-1-1.png",
//     price: "$14.99",
//     cardImage: "/figmaAssets/rectangle-7-3.svg",
//     decoration: "/figmaAssets/group-16.png",
//     imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
//     wrapperClassName: "relative",
//   },
//   {
//     title: "Desi Murga Karai",
//     description:
//       "Whole pieces of tender chicken in rich aromatic karai with Pakistani masala and spices",
//     image: "/figmaAssets/dish-3-1.png",
//     price: "$15.99",
//     cardImage: "/figmaAssets/rectangle-7.svg",
//     imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
//     wrapperClassName: "relative",
//   },
//   {
//     title: "Chicken Tikka",
//     description:
//       "Succulent marinated chicken pieces grilled to perfection with traditional spices and lemon",
//     image: "/figmaAssets/dish-5.png",
//     price: "$13.99",
//     cardImage: "/figmaAssets/rectangle-7.svg",
//     imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
//     wrapperClassName: "relative",
//   },
//   {
//     title: "Shish Kebab Boti",
//     description:
//       "Chargrilled tender meat skewers with aromatic spices and fresh vegetables, served hot",
//     image: "/figmaAssets/dish-4.png",
//     price: "$16.99",
//     cardImage: "/figmaAssets/rectangle-7.svg",
//     imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
//     wrapperClassName: "relative",
//   },
// ];

// const testimonials = [
//   {
//     name: "Fatima Ahmed",
//     role: "Food Lover · Lahore",
//     avatar: "/figmaAssets/mask-group-2.png",
//     text: "Al Aziz serves the most authentic Chicken Karai I've ever tasted! The flavors are incredible and remind me of home. The service is warm and welcoming. Highly recommended for all desi food lovers!",
//   },
//   {
//     name: "Hassan Ali",
//     role: "Customer · Karachi",
//     avatar: "/figmaAssets/mask-group-3.png",
//     text: "The Desi Murga Karai is absolutely delicious and prepared exactly how it should be. Every visit reminds me of authentic Pakistani cooking. Family-owned and it truly shows in their dedication to quality!",
//   },
// ];

// const footerNavigation = ["Menu", "About us", "Contact us", "Reservations"];
// const footerDishes = [
//   "Chicken Karai",
//   "Desi Murga Karai",
//   "Chicken Tikka",
//   "Shish Kebab Boti",
// ];

// const footerSocialLinks = [
//   {
//     alt: "Facebook",
//     image: "/figmaAssets/image-1-1.png",
//     imageClassName: "h-[25.05px] w-[25.05px] object-cover",
//   },
//   {
//     alt: "Instagram",
//     image: "/figmaAssets/icons8-instagram-2.svg",
//     imageClassName: "h-5 w-[21px]",
//   },
//   {
//     alt: "Twitter",
//     image: "/figmaAssets/image-3.png",
//     imageClassName: "h-[25px] w-[25px] object-cover",
//   },
// ];

// const decorativeImages = [
//   {
//     src: "/figmaAssets/group.png",
//     alt: "Group",
//     className:
//       "absolute right-0 top-0 z-0 hidden w-[315px] md:block xl:right-[12px] xl:top-[11px]",
//   },
//   {
//     src: "/figmaAssets/group-1.png",
//     alt: "Group",
//     className: "absolute left-[640px] top-[38px] z-0 hidden w-[448px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-2.png",
//     alt: "Group",
//     className: "absolute right-0 top-[334px] z-0 hidden w-[252px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-8.png",
//     alt: "Group",
//     className:
//       "absolute left-[278px] top-[1244px] z-0 hidden w-[224px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-9.png",
//     alt: "Group",
//     className:
//       "absolute left-[816px] top-[2181px] z-0 hidden w-[224px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-10.png",
//     alt: "Group",
//     className:
//       "absolute left-[945px] top-[1221px] z-0 hidden w-[180px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-11.png",
//     alt: "Group",
//     className:
//       "absolute left-[648px] top-[1948px] z-0 hidden w-[275px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-13.png",
//     alt: "Group",
//     className: "absolute right-0 top-[2436px] z-0 hidden w-[452px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-14.png",
//     alt: "Group",
//     className: "absolute left-0 top-[4087px] z-0 hidden w-[755px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-15.png",
//     alt: "Group",
//     className:
//       "absolute right-[37px] top-[5470px] z-0 hidden w-[1122px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-5.png",
//     alt: "Group",
//     className: "absolute left-0 top-[3228px] z-0 hidden w-[190px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-6.png",
//     alt: "Group",
//     className:
//       "absolute right-[165px] top-[1839px] z-0 hidden w-[118px] md:block",
//   },
//   {
//     src: "/figmaAssets/group-7.png",
//     alt: "Group",
//     className:
//       "absolute left-[92px] top-[3126px] z-0 hidden w-[290px] md:block",
//   },
//   {
//     src: "/figmaAssets/leaf-1.png",
//     alt: "Leaf",
//     className:
//       "absolute left-28 top-[2273px] z-0 hidden h-[189px] w-[91px] object-cover md:block",
//   },
//   {
//     src: "/figmaAssets/leaf-3.png",
//     alt: "Leaf",
//     className:
//       "absolute left-[677px] top-[2171px] z-0 hidden h-[129px] w-[194px] object-cover md:block",
//   },
// ];

// export const HomePage = (): JSX.Element => {
//   const reduce = useReducedMotion();
//   const float = reduce
//     ? {}
//     : { y: [0, -12, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };
//   const slowFloat = reduce
//     ? {}
//     : { y: [0, 10, 0], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } };

//   return (
//     <main className="bg-white text-[#101a24]">
//       <div className="relative mx-auto min-h-screen max-w-[1512px] overflow-hidden bg-white">
//         {decorativeImages.map((image, index) => (
//           <motion.img
//             key={image.src}
//             className={image.className}
//             alt={image.alt}
//             src={image.src}
//             initial={{ opacity: 0 }}
//             animate={(index % 2 === 0 ? { opacity: 1, ...float } : { opacity: 1, ...slowFloat }) as TargetAndTransition}
//             transition={{ opacity: { duration: 1.2, delay: 0.2 } }}
//           />
//         ))}

//         <div className="pointer-events-none absolute left-[-538px] top-[-452px] hidden h-[960px] w-[960px] rounded-full border border-solid border-[#101a2433] md:block" />
//         <div className="pointer-events-none absolute left-[-450px] top-[-428px] hidden h-[960px] w-[960px] rounded-full border border-solid border-[#101a2433] md:block" />
//         <div className="pointer-events-none absolute left-[-482px] top-[-519px] hidden h-[960px] w-[960px] rotate-[-17.41deg] rounded-full border border-solid border-[#101a2433] md:block" />
//         <motion.header
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="relative z-10 mx-auto flex w-full max-w-[1152px] items-center justify-between px-6 pb-10 pt-8 md:px-10 xl:px-0"
//         >
//           <a href="#" className="shrink-0">
//             <img
//               className="h-[55px] w-[198px]"
//               alt="Al Aziz Restaurant"
//               src="/figmaAssets/logo-1.svg"
//             />
//           </a>
//           <nav aria-label="Main navigation" className="hidden md:block">
//             <motion.ul
//               className="flex items-center gap-[45px]"
//               variants={staggerContainer}
//               initial="hidden"
//               animate="visible"
//             >
//               {navigationItems.map((item) => (
//                 <motion.li key={item} variants={fadeUp}>
//                   <button
//                     type="button"
//                     className="h-auto [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#101a24] transition-opacity hover:opacity-70"
//                   >
//                     {item}
//                   </button>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </nav>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//             <Button
//               type="button"
//               className="h-auto rounded-[10px] bg-[#ea6d27] px-6 py-4 shadow-[0px_4px_4px_#00000040] [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
//             >
//               Book a table
//             </Button>
//           </motion.div>
//         </motion.header>
//         <section className="relative z-10 mx-auto grid w-full max-w-[1152px] gap-10 px-6 pb-24 pt-4 md:px-10 lg:grid-cols-[376px_minmax(0,1fr)] lg:items-center xl:px-0">
//           <motion.article
//             className="max-w-[376px] pt-8"
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h1
//               variants={fadeUp}
//               className="[font-family:'David_Libre',Helvetica] text-[48px] font-bold leading-[52px] text-[#101a24] md:text-[70px] md:leading-[72px]"
//             >
//               Authentic Desi <br />
//               Flavors
//             </motion.h1>
//             <motion.p
//               variants={fadeUp}
//               className="mt-6 [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
//             >
//               Welcome to Al Aziz Restaurant, where tradition meets authentic Pakistani cuisine. Experience the finest desi flavors, prepared fresh daily with premium ingredients and family recipes passed down through generations.
//             </motion.p>
//             <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                 <Button
//                   type="button"
//                   className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
//                 >
//                   Menu
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                 <Button
//                   type="button"
//                   className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
//                 >
//                   Book a table
//                 </Button>
//               </motion.div>
//             </motion.div>
//             <motion.div variants={fadeUp} className="mt-20 flex items-center gap-4">
//               {heroSocialLinks.map((social) => (
//                 <motion.button
//                   key={social.alt}
//                   type="button"
//                   aria-label={social.alt}
//                   whileHover={{ scale: 1.15, backgroundColor: "#101a24" }}
//                   whileTap={{ scale: 0.92 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 18 }}
//                   className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-solid border-[#101a24] bg-transparent"
//                 >
//                   <img
//                     className={social.imageClassName}
//                     alt={social.alt}
//                     src={social.image}
//                   />
//                 </motion.button>
//               ))}
//               <img
//                 className="ml-2 h-px w-[143px]"
//                 alt="Line"
//                 src="/figmaAssets/line-1.svg"
//               />
//             </motion.div>
//           </motion.article>
//           <div className="relative mx-auto flex w-full max-w-[700px] items-center justify-center lg:justify-end">
//             <motion.img
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="absolute right-0 top-[10px] hidden h-[712px] w-[516px] max-w-none md:block"
//               alt="Mask group"
//               src="/figmaAssets/mask-group.png"
//             />
//             <motion.img
//               initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//               whileHover={{ rotate: 8, scale: 1.04 }}
//               className="relative z-10 mt-[220px] h-[364px] w-[364px] cursor-pointer object-cover md:mr-[220px]"
//               alt="Dish"
//               src="/figmaAssets/dish-2-2.png"
//               style={{ willChange: "transform" }}
//             />
//           </div>
//         </section>
//         <section className="relative mt-10 bg-[#101a24]/5 py-24">
//           <div className="relative z-10 mx-auto max-w-[1152px] px-6 md:px-10 xl:px-0">
//             <motion.div
//               className="mx-auto max-w-[520px] text-center"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               <motion.h2
//                 variants={fadeUp}
//                 className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[65px] text-[#101a24] md:text-6xl"
//               >
//                 Our Special Menu
//               </motion.h2>
//               <motion.p
//                 variants={fadeUp}
//                 className="mx-auto mt-5 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
//               >
//                 Discover our signature Pakistani desi dishes, crafted with traditional recipes and the finest ingredients for authentic flavor
//               </motion.p>
//             </motion.div>
//             <motion.div
//               className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-4"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               {specialDishes.map((dish) => (
//                 <motion.div
//                   key={dish.title}
//                   variants={cardItem}
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 200, damping: 18 }}
//                 >
//                   <Card className="border-0 bg-transparent shadow-none">
//                     <CardContent className="relative flex flex-col items-center px-0 pb-0 pt-0">
//                       {dish.decoration ? (
//                         <img
//                           className="absolute right-0 top-[315px] h-[103px] w-[100px]"
//                           alt="Group"
//                           src={dish.decoration}
//                         />
//                       ) : null}

//                       <div className={dish.wrapperClassName}>
//                         <motion.img
//                           className={dish.imageClassName}
//                           alt={dish.title}
//                           src={dish.image}
//                           whileHover={{ rotate: 12, scale: 1.08 }}
//                           transition={{ type: "spring", stiffness: 200, damping: 14 }}
//                         />
//                         <motion.div
//                           whileHover={{ scale: 1.15 }}
//                           className="absolute right-0 top-[47px] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#101a24] shadow-[0px_15px_30px_#00000040]"
//                         >
//                           <span className="[font-family:'Inter',Helvetica] text-base font-bold leading-[26px] text-white">
//                             {dish.price}
//                           </span>
//                         </motion.div>
//                       </div>
//                       <div className="relative -mt-[105px] flex w-full max-w-[265px] flex-col items-center bg-[url('/figmaAssets/rectangle-7.svg')] bg-[length:100%_100%] bg-no-repeat px-5 pb-10 pt-[138px]">
//                         <img
//                           className="absolute inset-0 -z-10 h-full w-full"
//                           alt="Rectangle"
//                           src={dish.cardImage}
//                         />
//                         <h3 className="text-center [font-family:'David_Libre',Helvetica] text-xl font-bold leading-[26px] text-[#101a24]">
//                           {dish.title}
//                         </h3>
//                         <p className="mt-5 text-center [font-family:'Inter',Helvetica] text-[15px] font-normal leading-[26px] text-[#5c6574]">
//                           {dish.description}
//                         </p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//         <section className="relative mx-auto grid w-full max-w-[1152px] gap-12 px-6 py-28 md:px-10 lg:grid-cols-[1fr_520px] lg:items-center xl:px-0">
//           <motion.div
//             className="relative"
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//           >
//             <motion.img
//               className="h-auto w-full max-w-[719px] object-cover"
//               alt="Dish"
//               src="/figmaAssets/dish-2-2.png"
//               animate={reduce ? {} : { rotate: [0, 6, 0, -6, 0] }}
//               transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//               whileHover={{ scale: 1.04 }}
//             />
//           </motion.div>
//           <motion.article
//             className="max-w-[520px]"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//           >
//             <motion.h2
//               variants={fadeUp}
//               className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
//             >
//               Welcome to Al Aziz
//             </motion.h2>
//             <motion.p
//               variants={fadeUp}
//               className="mt-7 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
//             >
//               Al Aziz is a family-owned restaurant dedicated to bringing authentic Pakistani cuisine to your table. We prepare traditional desi dishes with passion, using premium ingredients and time-honored recipes that celebrate our culinary heritage.
//             </motion.p>
//             <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                 <Button
//                   type="button"
//                   className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
//                 >
//                   Menu
//                 </Button>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                 <Button
//                   type="button"
//                   className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
//                 >
//                   Book a table
//                 </Button>
//               </motion.div>
//             </motion.div>
//           </motion.article>
//         </section>
//         <section className="relative bg-white py-28">
//           <div className="relative z-10 mx-auto grid w-full max-w-[1152px] gap-12 px-6 md:px-10 lg:grid-cols-[520px_1fr] lg:items-center xl:px-0">
//             <motion.article
//               className="max-w-[520px]"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               <motion.h2
//                 variants={fadeUp}
//                 className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
//               >
//                 Our Expert Kitchen
//               </motion.h2>
//               <motion.p
//                 variants={fadeUp}
//                 className="mt-7 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
//               >
//                 Our skilled culinary team brings decades of expertise in traditional Pakistani cooking. Every dish is prepared fresh to order with meticulous attention to detail, ensuring authentic flavors and exceptional quality in every bite.
//               </motion.p>
//               <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                   <Button
//                     type="button"
//                     className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
//                   >
//                     Menu
//                   </Button>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                   <Button
//                     type="button"
//                     className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
//                   >
//                     Book a table
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </motion.article>
//             <motion.div
//               className="flex justify-center lg:justify-end"
//               variants={fadeRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               <motion.img
//                 className="h-auto w-full max-w-[507px] object-cover"
//                 alt="Chef"
//                 src="/figmaAssets/chef-1.png"
//                 whileHover={{ scale: 1.03, rotate: -1 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 18 }}
//               />
//             </motion.div>
//           </div>
//         </section>
//         <section className="relative bg-[#f3f4f4] py-24">
//           <div className="relative z-10 mx-auto max-w-[1152px] px-6 md:px-10 xl:px-0">
//             <motion.div
//               className="mx-auto max-w-[645px] text-center"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               <motion.h2
//                 variants={fadeUp}
//                 className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
//               >
//                 Our Valued Customers
//               </motion.h2>
//               <motion.p
//                 variants={fadeUp}
//                 className="mx-auto mt-5 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
//               >
//                 Experience the authentic Pakistani cuisine loved by our community
//               </motion.p>
//             </motion.div>
//             <motion.div
//               className="mt-20 grid gap-10 xl:grid-cols-2"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               {testimonials.map((testimonial) => (
//                 <motion.div
//                   key={testimonial.name}
//                   variants={cardItem}
//                   whileHover={{ y: -8, boxShadow: "0px 25px 40px rgba(0,0,0,0.12)" }}
//                   className="rounded-[30px]"
//                 >
//                 <Card
//                   className="relative rounded-[30px] border-0 bg-white pt-0 shadow-[0px_15px_30px_#00000012]"
//                 >
//                   <CardContent className="px-8 pb-10 pt-0">
//                     <div className="flex justify-center">
//                       <img
//                         className="-mt-[12px] h-[109px] w-[109px]"
//                         alt={testimonial.name}
//                         src={testimonial.avatar}
//                       />
//                     </div>
//                     <div className="mt-4 flex justify-center gap-[12.7px]">
//                       {Array.from({ length: 5 }).map((_, index) => (
//                         <span
//                           key={`${testimonial.name}-star-${index}`}
//                           className="[font-family:'Font_Awesome_5_Free-Solid',Helvetica] text-base font-normal leading-[65px] text-[#ffbb00]"
//                         >
//                           star
//                         </span>
//                       ))}
//                     </div>
//                     <p className="mx-auto mt-2 max-w-[383px] text-center [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                       {testimonial.text}
//                     </p>
//                     <div className="mt-6 text-center">
//                       <h3 className="[font-family:'Inter',Helvetica] text-base font-bold leading-[29px] text-[#101a24]">
//                         {testimonial.name}
//                       </h3>
//                       <p className="[font-family:'Inter',Helvetica] text-[15px] font-normal leading-[29px] text-[#5c6574]">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//             <div className="mt-12 flex items-center justify-center gap-[23px]">
//               {[0, 1, 2, 3, 4, 5].map((dot, index) => (
//                 <motion.button
//                   key={`dot-${dot}`}
//                   type="button"
//                   aria-label={`Go to slide ${index + 1}`}
//                   whileHover={{ scale: 1.6 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`h-[7px] w-[7px] rounded-full ${
//                     index === 1 ? "bg-[#ea6d27]" : "bg-[#101a24] opacity-20"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//         <section className="relative mx-auto max-w-[1152px] px-6 py-20 md:px-10 xl:px-0">
//           <motion.div
//             className="relative overflow-hidden rounded-[30px]"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={viewportOnce}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <motion.img
//               className="h-auto w-full"
//               alt="Mask group"
//               src="/figmaAssets/mask-group-1.png"
//               initial={{ scale: 1.1 }}
//               whileInView={{ scale: 1 }}
//               viewport={viewportOnce}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//             />
//             <motion.div
//               className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={viewportOnce}
//             >
//               <motion.h2
//                 variants={fadeUp}
//                 className="[font-family:'David_Libre',Helvetica] text-3xl font-bold leading-[42px] text-white md:text-[50px] md:leading-[58px]"
//               >
//                 Special Offers & Updates
//                 <br />
//                 Subscribe to Our Newsletter
//               </motion.h2>
//               <motion.div
//                 variants={fadeUp}
//                 className="mt-10 flex w-full max-w-[667px] flex-col gap-3 rounded-[20px] bg-white p-[11px] md:flex-row md:items-center"
//               >
//                 <Input
//                   type="email"
//                   defaultValue=""
//                   placeholder="Enter your email"
//                   className="h-[58px] border-0 bg-transparent px-4 [font-family:'Inter',Helvetica] text-lg font-normal text-[#101a24] placeholder:text-[#101a24]/50 focus-visible:ring-0 focus-visible:ring-offset-0"
//                 />
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
//                   <Button
//                     type="button"
//                     className="h-auto min-w-[150px] rounded-[10px] bg-[#ea6d27] px-6 py-[17px] [font-family:'Inter',Helvetica] text-base font-bold text-white hover:bg-[#ea6d27]/90"
//                   >
//                     Subscribe
//                   </Button>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </section>
//         <motion.footer
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={viewportOnce}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="relative z-10 mx-auto w-full max-w-[1152px] px-6 pb-16 pt-8 md:px-10 xl:px-0"
//         >
//           <div className="grid gap-10 lg:grid-cols-[408px_95px_131px_149px] lg:items-start lg:justify-between">
//             <div>
//               <img
//                 className="h-[55px] w-[198px]"
//                 alt="Al Aziz Restaurant"
//                 src="/figmaAssets/logo-1-1.svg"
//               />
//               <p className="mt-6 max-w-[408px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                 <span>
//                   Al Aziz Restaurant is a family-owned eatery serving authentic Pakistani desi cuisine. We prepare traditional dishes fresh daily using premium ingredients and time-honored recipes.
//                 </span>
//                 <br />
//                 <a href="tel:+923029380823" className="underline">Call: 0302 9380823</a>
//                 &nbsp;&nbsp;
//                 <a href="https://alazizrestaurant.com" target="_blank" rel="noopener noreferrer" className="underline">alazizrestaurant.com</a>
//               </p>
//               <div className="mt-8">
//                 <h3 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]">
//                   OPENING HOURS
//                 </h3>
//                 <div className="grid max-w-[460px] gap-6 sm:grid-cols-3">
//                   <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                     Monday - Friday
//                     <br />
//                     11:00 am to 10:00 pm
//                   </p>
//                   <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                     Saturday
//                     <br />
//                     11:00 am to 10:00 pm
//                   </p>
//                   <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                     Sunday
//                     <br />
//                     11:00 am to 10:00 pm
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <nav aria-label="Footer navigation">
//               <h3 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]">
//                 NAVIGATION
//               </h3>
//               <ul className="[font-family:'Inter',Helvetica] text-base font-normal leading-10 text-[#5c6574]">
//                 {footerNavigation.map((item) => (
//                   <li key={item}>
//                     <button
//                       type="button"
//                       className="h-auto text-left transition-opacity hover:opacity-70"
//                     >
//                       {item}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//             <section aria-labelledby="footer-dishes-heading">
//               <h3
//                 id="footer-dishes-heading"
//                 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]"
//               >
//                 DISHES
//               </h3>
//               <ul className="[font-family:'Inter',Helvetica] text-base font-normal leading-10 text-[#5c6574]">
//                 {footerDishes.map((dish) => (
//                   <li key={dish}>{dish}</li>
//                 ))}
//               </ul>
//             </section>
//             <section aria-labelledby="footer-social-heading">
//               <h3
//                 id="footer-social-heading"
//                 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]"
//               >
//                 FOLLOW US
//               </h3>
//               <div className="mt-4 flex items-center gap-4">
//                 {footerSocialLinks.map((social) => (
//                   <button
//                     key={social.alt}
//                     type="button"
//                     aria-label={social.alt}
//                     className="flex h-[39px] w-[39px] items-center justify-center rounded-full border border-solid border-[#101a24] bg-transparent"
//                   >
//                     <img
//                       className={social.imageClassName}
//                       alt={social.alt}
//                       src={social.image}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </section>
//           </div>
//           <img
//             className="mt-10 h-px w-full"
//             alt="Line"
//             src="/figmaAssets/line-2.svg"
//           />
//           <div className="mt-9 flex flex-col justify-between gap-4 md:flex-row md:items-center">
//             <div className="flex items-center gap-2.5">
//               <img
//                 className="h-[13px] w-[13px]"
//                 alt="Copyright symbol"
//                 src="/figmaAssets/copyright-symbol-svgrepo-com-1.svg"
//               />
//               <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//                 <span>2026 Restaurants. All Right Reserved. Designed by </span>
//                 <span className="font-bold">Code Astra Labs</span>
//               </p>
//             </div>
//             <div className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
//               Terms of
//               Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
//               Policy
//             </div>
//           </div>
//         </motion.footer>
//       </div>
//     </main>
//   );
// };

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion, useReducedMotion, type Variants, type TargetAndTransition } from "framer-motion";
import { Star, X } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const viewportOnce = { once: true, amount: 0.2 } as const;

const navigationItems = ["Menu", "Events", "Gallery", "About", "Contact"];

const heroSocialLinks = [
  {
    alt: "Facebook",
    bordered: true,
    image: "/figmaAssets/image-1-1.png",
    imageClassName: "h-[29px] w-[29px] object-cover",
  },
  {
    alt: "Instagram",
    bordered: true,
    image: "/figmaAssets/icons8-instagram-2.svg",
    imageClassName: "h-6 w-6",
  },
  {
    alt: "Twitter",
    bordered: true,
    image: "/figmaAssets/image-3.png",
    imageClassName: "h-[29px] w-[29px] object-cover",
  },
];

const specialDishes = [
  {
    title: "Chicken Karai",
    description:
      "Tender chicken cooked in our signature desi style with traditional spices and fresh coriander",
    image: "/figmaAssets/dish-1-1.png",
    price: "$14.99",
    cardImage: "/figmaAssets/rectangle-7-3.svg",
    decoration: "/figmaAssets/group-16.png",
    imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
    wrapperClassName: "relative",
  },
  {
    title: "Desi Murga Karai",
    description:
      "Whole pieces of tender chicken in rich aromatic karai with Pakistani masala and spices",
    image: "/figmaAssets/dish-3-1.png",
    price: "$15.99",
    cardImage: "/figmaAssets/rectangle-7.svg",
    imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
    wrapperClassName: "relative",
  },
  {
    title: "Chicken Tikka",
    description:
      "Succulent marinated chicken pieces grilled to perfection with traditional spices and lemon",
    image: "/figmaAssets/dish-5.png",
    price: "$13.99",
    cardImage: "/figmaAssets/rectangle-7.svg",
    imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
    wrapperClassName: "relative",
  },
  {
    title: "Shish Kebab Boti",
    description:
      "Chargrilled tender meat skewers with aromatic spices and fresh vegetables, served hot",
    image: "/figmaAssets/dish-4.png",
    price: "$16.99",
    cardImage: "/figmaAssets/rectangle-7.svg",
    imageClassName: "mx-auto -mt-20 h-[207px] w-[207px] object-cover",
    wrapperClassName: "relative",
  },
];

const testimonials = [
  {
    name: "Fatima Ahmed",
    role: "Food Lover · Lahore",
    avatar: "/figmaAssets/mask-group-2.png",
    text: "Al Aziz serves the most authentic Chicken Karai I've ever tasted! The flavors are incredible and remind me of home. The service is warm and welcoming. Highly recommended for all desi food lovers!",
  },
  {
    name: "Hassan Ali",
    role: "Customer · Karachi",
    avatar: "/figmaAssets/mask-group-3.png",
    text: "The Desi Murga Karai is absolutely delicious and prepared exactly how it should be. Every visit reminds me of authentic Pakistani cooking. Family-owned and it truly shows in their dedication to quality!",
  },
];

const footerNavigation = ["Menu", "About us", "Contact us", "Reservations"];
const footerDishes = [
  "Chicken Karai",
  "Desi Murga Karai",
  "Chicken Tikka",
  "Shish Kebab Boti",
];

const footerSocialLinks = [
  {
    alt: "Facebook",
    image: "/figmaAssets/image-1-1.png",
    imageClassName: "h-[25.05px] w-[25.05px] object-cover",
  },
  {
    alt: "Instagram",
    image: "/figmaAssets/icons8-instagram-2.svg",
    imageClassName: "h-5 w-[21px]",
  },
  {
    alt: "Twitter",
    image: "/figmaAssets/image-3.png",
    imageClassName: "h-[25px] w-[25px] object-cover",
  },
];

const decorativeImages = [
  {
    src: "/figmaAssets/group.png",
    alt: "Group",
    className:
      "absolute right-0 top-0 z-0 hidden w-[315px] md:block xl:right-[12px] xl:top-[11px]",
  },
  {
    src: "/figmaAssets/group-1.png",
    alt: "Group",
    className: "absolute left-[640px] top-[38px] z-0 hidden w-[448px] md:block",
  },
  {
    src: "/figmaAssets/group-2.png",
    alt: "Group",
    className: "absolute right-0 top-[334px] z-0 hidden w-[252px] md:block",
  },
  {
    src: "/figmaAssets/group-8.png",
    alt: "Group",
    className:
      "absolute left-[278px] top-[1244px] z-0 hidden w-[224px] md:block",
  },
  {
    src: "/figmaAssets/group-9.png",
    alt: "Group",
    className:
      "absolute left-[816px] top-[2181px] z-0 hidden w-[224px] md:block",
  },
  {
    src: "/figmaAssets/group-10.png",
    alt: "Group",
    className:
      "absolute left-[945px] top-[1221px] z-0 hidden w-[180px] md:block",
  },
  {
    src: "/figmaAssets/group-11.png",
    alt: "Group",
    className:
      "absolute left-[648px] top-[1948px] z-0 hidden w-[275px] md:block",
  },
  {
    src: "/figmaAssets/group-13.png",
    alt: "Group",
    className: "absolute right-0 top-[2436px] z-0 hidden w-[452px] md:block",
  },
  {
    src: "/figmaAssets/group-14.png",
    alt: "Group",
    className: "absolute left-0 top-[4087px] z-0 hidden w-[755px] md:block",
  },
  {
    src: "/figmaAssets/group-15.png",
    alt: "Group",
    className:
      "absolute right-[37px] top-[5470px] z-0 hidden w-[1122px] md:block",
  },
  {
    src: "/figmaAssets/group-5.png",
    alt: "Group",
    className: "absolute left-0 top-[3228px] z-0 hidden w-[190px] md:block",
  },
  {
    src: "/figmaAssets/group-6.png",
    alt: "Group",
    className:
      "absolute right-[165px] top-[1839px] z-0 hidden w-[118px] md:block",
  },
  {
    src: "/figmaAssets/group-7.png",
    alt: "Group",
    className:
      "absolute left-[92px] top-[3126px] z-0 hidden w-[290px] md:block",
  },
  {
    src: "/figmaAssets/leaf-1.png",
    alt: "Leaf",
    className:
      "absolute left-28 top-[2273px] z-0 hidden h-[189px] w-[91px] object-cover md:block",
  },
  {
    src: "/figmaAssets/leaf-3.png",
    alt: "Leaf",
    className:
      "absolute left-[677px] top-[2171px] z-0 hidden h-[129px] w-[194px] object-cover md:block",
  },
];

// Booking Flow Modal Component
const BookingModal = ({ isOpen, onClose, selectedDish }: { isOpen: boolean; onClose: () => void; selectedDish?: typeof specialDishes[0] }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle final submission
      console.log("Booking submitted:", formData, selectedDish);
      onClose();
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        specialRequests: "",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8, y: isOpen ? 0 : 30 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-[30px] bg-white p-8 md:p-12 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f4] transition-all hover:bg-[#ea6d27] hover:text-white"
        >
          <X size={24} />
        </button>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Progress Indicator */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  className="flex items-center"
                  animate={{
                    opacity: step >= num ? 1 : 0.3,
                  }}
                >
                  <motion.div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                      step >= num
                        ? "bg-[#ea6d27] text-white"
                        : "bg-[#f3f4f4] text-[#101a24]"
                    }`}
                    animate={{
                      scale: step === num ? 1.1 : 1,
                    }}
                  >
                    {num}
                  </motion.div>
                  {num < 3 && (
                    <motion.div
                      className={`h-1 w-20 ${step > num ? "bg-[#ea6d27]" : "bg-[#f3f4f4]"}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="mt-4 text-center text-sm font-medium text-[#5c6574]">
              Step {step} of 3
            </motion.p>
          </motion.div>

          {/* Step 1: Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: step === 1 ? 1 : 0,
              y: step === 1 ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={step === 1 ? "block" : "hidden"}
          >
            <motion.h2 variants={slideUp} className="mb-2 text-4xl font-bold text-[#101a24]">
              Your Details
            </motion.h2>
            <motion.p variants={slideUp} className="mb-8 text-[#5c6574]">
              Let us know who we're serving
            </motion.p>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
              <motion.div variants={slideUp}>
                <label className="mb-2 block text-sm font-medium text-[#101a24]">Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 rounded-lg border-[#e0e0e0] px-4 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                />
              </motion.div>

              <motion.div variants={slideUp}>
                <label className="mb-2 block text-sm font-medium text-[#101a24]">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 rounded-lg border-[#e0e0e0] px-4 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                />
              </motion.div>

              <motion.div variants={slideUp}>
                <label className="mb-2 block text-sm font-medium text-[#101a24]">Phone</label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12 rounded-lg border-[#e0e0e0] px-4 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Step 2: Reservation Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: step === 2 ? 1 : 0,
              y: step === 2 ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={step === 2 ? "block" : "hidden"}
          >
            <motion.h2 variants={slideUp} className="mb-2 text-4xl font-bold text-[#101a24]">
              Reservation
            </motion.h2>
            <motion.p variants={slideUp} className="mb-8 text-[#5c6574]">
              Choose your preferred date and time
            </motion.p>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
              <motion.div variants={slideUp} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#101a24]">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="h-12 rounded-lg border-[#e0e0e0] px-4 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#101a24]">Time</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="h-12 rounded-lg border-[#e0e0e0] px-4 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                  />
                </div>
              </motion.div>

              <motion.div variants={slideUp}>
                <label className="mb-2 block text-sm font-medium text-[#101a24]">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => handleInputChange("guests", e.target.value)}
                  className="h-12 w-full rounded-lg border border-[#e0e0e0] bg-white px-4 text-[#101a24] focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </motion.div>

              {selectedDish && (
                <motion.div variants={slideUp} className="rounded-xl bg-[#f3f4f4] p-4">
                  <p className="text-sm font-medium text-[#5c6574]">Selected Dish</p>
                  <p className="mt-1 text-lg font-bold text-[#101a24]">{selectedDish.title}</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Step 3: Confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: step === 3 ? 1 : 0,
              y: step === 3 ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={step === 3 ? "block" : "hidden"}
          >
            <motion.h2 variants={slideUp} className="mb-2 text-4xl font-bold text-[#101a24]">
              Special Requests
            </motion.h2>
            <motion.p variants={slideUp} className="mb-8 text-[#5c6574]">
              Any dietary preferences or special occasion?
            </motion.p>

            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
              <motion.div variants={slideUp}>
                <label className="mb-2 block text-sm font-medium text-[#101a24]">Special Requests</label>
                <textarea
                  placeholder="Let us know any special requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  className="min-h-24 w-full rounded-lg border border-[#e0e0e0] px-4 py-3 focus:border-[#ea6d27] focus:ring-[#ea6d27]"
                />
              </motion.div>

              {/* Summary */}
              <motion.div variants={slideUp} className="rounded-xl bg-gradient-to-br from-[#ea6d27]/10 to-[#101a24]/5 p-6">
                <p className="text-sm font-medium text-[#5c6574]">BOOKING SUMMARY</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#5c6574]">Name:</span>
                    <span className="font-bold text-[#101a24]">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5c6574]">Date & Time:</span>
                    <span className="font-bold text-[#101a24]">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5c6574]">Guests:</span>
                    <span className="font-bold text-[#101a24]">{formData.guests}</span>
                  </div>
                  {selectedDish && (
                    <div className="flex justify-between">
                      <span className="text-[#5c6574]">Dish:</span>
                      <span className="font-bold text-[#101a24]">{selectedDish.title}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div variants={slideUp} className="mt-10 flex items-center gap-4">
            {step > 1 && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={() => setStep(step - 1)}
                  className="h-12 rounded-lg border-2 border-[#ea6d27] bg-white px-8 font-medium text-[#ea6d27] hover:bg-[#ea6d27] hover:text-white"
                >
                  Back
                </Button>
              </motion.div>
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="flex-1">
              <Button
                onClick={handleSubmit}
                className="h-12 w-full rounded-lg bg-[#ea6d27] px-8 font-medium text-white hover:bg-[#ea6d27]/90"
              >
                {step === 3 ? "Confirm Booking" : "Next"}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const HomePage = (): JSX.Element => {
  const reduce = useReducedMotion();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<typeof specialDishes[0] | undefined>();

  const float = reduce
    ? {}
    : { y: [0, -12, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };
  const slowFloat = reduce
    ? {}
    : { y: [0, 10, 0], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } };

  const handleDishClick = (dish: typeof specialDishes[0]) => {
    setSelectedDish(dish);
    setIsBookingOpen(true);
  };

  const handleBookingClick = () => {
    setSelectedDish(undefined);
    setIsBookingOpen(true);
  };

  return (
    <main className="bg-white text-[#101a24]">
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedDish={selectedDish}
      />

      <div className="relative mx-auto min-h-screen max-w-[1512px] overflow-hidden bg-white">
        {decorativeImages.map((image, index) => (
          <motion.img
            key={image.src}
            className={image.className}
            alt={image.alt}
            src={image.src}
            initial={{ opacity: 0 }}
            animate={(index % 2 === 0 ? { opacity: 1, ...float } : { opacity: 1, ...slowFloat }) as TargetAndTransition}
            transition={{ opacity: { duration: 1.2, delay: 0.2 } }}
          />
        ))}

        <div className="pointer-events-none absolute left-[-538px] top-[-452px] hidden h-[960px] w-[960px] rounded-full border border-solid border-[#101a2433] md:block" />
        <div className="pointer-events-none absolute left-[-450px] top-[-428px] hidden h-[960px] w-[960px] rounded-full border border-solid border-[#101a2433] md:block" />
        <div className="pointer-events-none absolute left-[-482px] top-[-519px] hidden h-[960px] w-[960px] rotate-[-17.41deg] rounded-full border border-solid border-[#101a2433] md:block" />
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex w-full max-w-[1152px] items-center justify-between px-6 pb-10 pt-8 md:px-10 xl:px-0"
        >
          <a href="#" className="shrink-0">
            <img
              className="h-[55px] w-[198px]"
              alt="Al Aziz Restaurant"
              src="/figmaAssets/logo-1.svg"
            />
          </a>
          <nav aria-label="Main navigation" className="hidden md:block">
            <motion.ul
              className="flex items-center gap-[45px]"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navigationItems.map((item) => (
                <motion.li key={item} variants={fadeUp}>
                  <button
                    type="button"
                    className="h-auto [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#101a24] transition-opacity hover:opacity-70"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={handleBookingClick}
              type="button"
              className="h-auto rounded-[10px] bg-[#ea6d27] px-6 py-4 shadow-[0px_4px_4px_#00000040] [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
            >
              Book a table
            </Button>
          </motion.div>
        </motion.header>
        <section className="relative z-10 mx-auto grid w-full max-w-[1152px] gap-10 px-6 pb-24 pt-4 md:px-10 lg:grid-cols-[376px_minmax(0,1fr)] lg:items-center xl:px-0">
          <motion.article
            className="max-w-[376px] pt-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="[font-family:'David_Libre',Helvetica] text-[48px] font-bold leading-[52px] text-[#101a24] md:text-[70px] md:leading-[72px]"
            >
              Authentic Desi <br />
              Flavors
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
            >
              Welcome to Al Aziz Restaurant, where tradition meets authentic Pakistani cuisine. Experience the finest desi flavors, prepared fresh daily with premium ingredients and family recipes passed down through generations.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
                >
                  Menu
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={handleBookingClick}
                  type="button"
                  className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
                >
                  Book a table
                </Button>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-20 flex items-center gap-4">
              {heroSocialLinks.map((social) => (
                <motion.button
                  key={social.alt}
                  type="button"
                  aria-label={social.alt}
                  whileHover={{ scale: 1.15, backgroundColor: "#101a24" }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex h-[45px] w-[45px] items-center justify-center rounded-full border border-solid border-[#101a24] bg-transparent"
                >
                  <img
                    className={social.imageClassName}
                    alt={social.alt}
                    src={social.image}
                  />
                </motion.button>
              ))}
              <img
                className="ml-2 h-px w-[143px]"
                alt="Line"
                src="/figmaAssets/line-1.svg"
              />
            </motion.div>
          </motion.article>
          <div className="relative mx-auto flex w-full max-w-[700px] items-center justify-center lg:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute right-0 top-[10px] hidden h-[712px] w-[516px] max-w-none md:block"
              alt="Mask group"
              src="/figmaAssets/mask-group.png"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ rotate: 8, scale: 1.04 }}
              className="relative z-10 mt-[220px] h-[364px] w-[364px] cursor-pointer object-cover md:mr-[220px]"
              alt="Dish"
              src="/figmaAssets/dish-2-2.png"
              style={{ willChange: "transform" }}
            />
          </div>
        </section>
        <section className="relative mt-10 bg-[#101a24]/5 py-24">
          <div className="relative z-10 mx-auto max-w-[1152px] px-6 md:px-10 xl:px-0">
            <motion.div
              className="mx-auto max-w-[520px] text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[65px] text-[#101a24] md:text-6xl"
              >
                Our Special Menu
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
              >
                Discover our signature Pakistani desi dishes, crafted with traditional recipes and the finest ingredients for authentic flavor
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {specialDishes.map((dish) => (
                <motion.div
                  key={dish.title}
                  variants={cardItem}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  onClick={() => handleDishClick(dish)}
                  className="cursor-pointer"
                >
                  <Card className="border-0 bg-transparent shadow-none">
                    <CardContent className="relative flex flex-col items-center px-0 pb-0 pt-0">
                      {dish.decoration ? (
                        <img
                          className="absolute right-0 top-[315px] h-[103px] w-[100px]"
                          alt="Group"
                          src={dish.decoration}
                        />
                      ) : null}

                      <div className={dish.wrapperClassName}>
                        <motion.img
                          className={dish.imageClassName}
                          alt={dish.title}
                          src={dish.image}
                          whileHover={{ rotate: 12, scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 200, damping: 14 }}
                        />
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          className="absolute right-0 top-[47px] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#101a24] shadow-[0px_15px_30px_#00000040]"
                        >
                          <span className="[font-family:'Inter',Helvetica] text-base font-bold leading-[26px] text-white">
                            {dish.price}
                          </span>
                        </motion.div>
                      </div>
                      <div className="relative -mt-[105px] flex w-full max-w-[265px] flex-col items-center bg-[url('/figmaAssets/rectangle-7.svg')] bg-[length:100%_100%] bg-no-repeat px-5 pb-10 pt-[138px]">
                        <img
                          className="absolute inset-0 -z-10 h-full w-full"
                          alt="Rectangle"
                          src={dish.cardImage}
                        />
                        <h3 className="text-center [font-family:'David_Libre',Helvetica] text-xl font-bold leading-[26px] text-[#101a24]">
                          {dish.title}
                        </h3>
                        <p className="mt-5 text-center [font-family:'Inter',Helvetica] text-[15px] font-normal leading-[26px] text-[#5c6574]">
                          {dish.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="relative mx-auto grid w-full max-w-[1152px] gap-12 px-6 py-28 md:px-10 lg:grid-cols-[1fr_520px] lg:items-center xl:px-0">
          <motion.div
            className="relative"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.img
              className="h-auto w-full max-w-[719px] object-cover"
              alt="Dish"
              src="/figmaAssets/dish-2-2.png"
              animate={reduce ? {} : { rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.04 }}
            />
          </motion.div>
          <motion.article
            className="max-w-[520px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={fadeUp}
              className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
            >
              Welcome to Al Aziz
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
            >
              Al Aziz is a family-owned restaurant dedicated to bringing authentic Pakistani cuisine to your table. We prepare traditional desi dishes with passion, using premium ingredients and time-honored recipes that celebrate our culinary heritage.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="button"
                  className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
                >
                  Menu
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={handleBookingClick}
                  type="button"
                  className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
                >
                  Book a table
                </Button>
              </motion.div>
            </motion.div>
          </motion.article>
        </section>
        <section className="relative bg-white py-28">
          <div className="relative z-10 mx-auto grid w-full max-w-[1152px] gap-12 px-6 md:px-10 lg:grid-cols-[520px_1fr] lg:items-center xl:px-0">
            <motion.article
              className="max-w-[520px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
              >
                Our Expert Kitchen
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
              >
                Our skilled culinary team brings decades of expertise in traditional Pakistani cooking. Every dish is prepared fresh to order with meticulous attention to detail, ensuring authentic flavors and exceptional quality in every bite.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="button"
                    className="h-auto rounded-[10px] bg-[#101a24] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#101a24]/90"
                  >
                    Menu
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={handleBookingClick}
                    type="button"
                    className="h-auto rounded-[10px] bg-[#ea6d27] px-8 py-4 [font-family:'David_Libre',Helvetica] text-xl font-medium leading-[29px] text-white hover:bg-[#ea6d27]/90"
                  >
                    Book a table
                  </Button>
                </motion.div>
              </motion.div>
            </motion.article>
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.img
                className="h-auto w-full max-w-[507px] object-cover"
                alt="Chef"
                src="/figmaAssets/chef-1.png"
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
            </motion.div>
          </div>
        </section>
        <section className="relative bg-[#f3f4f4] py-24">
          <div className="relative z-10 mx-auto max-w-[1152px] px-6 md:px-10 xl:px-0">
            <motion.div
              className="mx-auto max-w-[645px] text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="[font-family:'David_Libre',Helvetica] text-5xl font-bold leading-[56px] text-[#101a24] md:text-6xl md:leading-[65px]"
              >
                Our Valued Customers
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-[376px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]"
              >
                Experience the authentic Pakistani cuisine loved by our community
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-20 grid gap-10 xl:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  variants={cardItem}
                  whileHover={{ y: -8, boxShadow: "0px 25px 40px rgba(0,0,0,0.12)" }}
                  className="rounded-[30px]"
                >
                <Card
                  className="relative rounded-[30px] border-0 bg-white pt-0 shadow-[0px_15px_30px_#00000012]"
                >
                  <CardContent className="px-8 pb-10 pt-0">
                    <div className="flex justify-center">
                      <img
                        className="-mt-[12px] h-[109px] w-[109px]"
                        alt={testimonial.name}
                        src={testimonial.avatar}
                      />
                    </div>
                    <div className="mt-4 flex justify-center gap-[12.7px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <motion.div
                          key={`${testimonial.name}-star-${index}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          viewport={viewportOnce}
                        >
                          <Star
                            size={20}
                            className="fill-[#ffbb00] text-[#ffbb00]"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <p className="mx-auto mt-2 max-w-[383px] text-center [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                      {testimonial.text}
                    </p>
                    <div className="mt-6 text-center">
                      <h3 className="[font-family:'Inter',Helvetica] text-base font-bold leading-[29px] text-[#101a24]">
                        {testimonial.name}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] text-[15px] font-normal leading-[29px] text-[#5c6574]">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-12 flex items-center justify-center gap-[23px]">
              {[0, 1, 2, 3, 4, 5].map((dot, index) => (
                <motion.button
                  key={`dot-${dot}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.6 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-[7px] w-[7px] rounded-full ${
                    index === 1 ? "bg-[#ea6d27]" : "bg-[#101a24] opacity-20"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="relative mx-auto max-w-[1152px] px-6 py-20 md:px-10 xl:px-0">
          <motion.div
            className="relative overflow-hidden rounded-[30px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              className="h-auto w-full"
              alt="Mask group"
              src="/figmaAssets/mask-group-1.png"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h2
                variants={fadeUp}
                className="[font-family:'David_Libre',Helvetica] text-3xl font-bold leading-[42px] text-white md:text-[50px] md:leading-[58px]"
              >
                Special Offers & Updates
                <br />
                Subscribe to Our Newsletter
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="mt-10 flex w-full max-w-[667px] flex-col gap-3 rounded-[20px] bg-white p-[11px] md:flex-row md:items-center"
              >
                <Input
                  type="email"
                  defaultValue=""
                  placeholder="Enter your email"
                  className="h-[58px] border-0 bg-transparent px-4 [font-family:'Inter',Helvetica] text-lg font-normal text-[#101a24] placeholder:text-[#101a24]/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    type="button"
                    className="h-auto min-w-[150px] rounded-[10px] bg-[#ea6d27] px-6 py-[17px] [font-family:'Inter',Helvetica] text-base font-bold text-white hover:bg-[#ea6d27]/90"
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-[1152px] px-6 pb-16 pt-8 md:px-10 xl:px-0"
        >
          <div className="grid gap-10 lg:grid-cols-[408px_95px_131px_149px] lg:items-start lg:justify-between">
            <div>
              <img
                className="h-[55px] w-[198px]"
                alt="Al Aziz Restaurant"
                src="/figmaAssets/logo-1-1.svg"
              />
              <p className="mt-6 max-w-[408px] [font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                <span>
                  Al Aziz Restaurant is a family-owned eatery serving authentic Pakistani desi cuisine. We prepare traditional dishes fresh daily using premium ingredients and time-honored recipes.
                </span>
                <br />
                <a href="tel:+923029380823" className="underline">Call: 0302 9380823</a>
                &nbsp;&nbsp;
                <a href="https://alazizrestaurant.com" target="_blank" rel="noopener noreferrer" className="underline">alazizrestaurant.com</a>
              </p>
              <div className="mt-8">
                <h3 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]">
                  OPENING HOURS
                </h3>
                <div className="grid max-w-[460px] gap-6 sm:grid-cols-3">
                  <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                    Monday - Friday
                    <br />
                    11:00 am to 10:00 pm
                  </p>
                  <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                    Saturday
                    <br />
                    11:00 am to 10:00 pm
                  </p>
                  <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                    Sunday
                    <br />
                    11:00 am to 10:00 pm
                  </p>
                </div>
              </div>
            </div>
            <nav aria-label="Footer navigation">
              <h3 className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]">
                NAVIGATION
              </h3>
              <ul className="[font-family:'Inter',Helvetica] text-base font-normal leading-10 text-[#5c6574]">
                {footerNavigation.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="h-auto text-left transition-opacity hover:opacity-70"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <section aria-labelledby="footer-dishes-heading">
              <h3
                id="footer-dishes-heading"
                className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]"
              >
                DISHES
              </h3>
              <ul className="[font-family:'Inter',Helvetica] text-base font-normal leading-10 text-[#5c6574]">
                {footerDishes.map((dish) => (
                  <li key={dish}>{dish}</li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="footer-social-heading">
              <h3
                id="footer-social-heading"
                className="[font-family:'Inter',Helvetica] text-xs font-bold leading-10 text-[#101a24]"
              >
                FOLLOW US
              </h3>
              <div className="mt-4 flex items-center gap-4">
                {footerSocialLinks.map((social) => (
                  <button
                    key={social.alt}
                    type="button"
                    aria-label={social.alt}
                    className="flex h-[39px] w-[39px] items-center justify-center rounded-full border border-solid border-[#101a24] bg-transparent"
                  >
                    <img
                      className={social.imageClassName}
                      alt={social.alt}
                      src={social.image}
                    />
                  </button>
                ))}
              </div>
            </section>
          </div>
          <img
            className="mt-10 h-px w-full"
            alt="Line"
            src="/figmaAssets/line-2.svg"
          />
          <div className="mt-9 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2.5">
              <img
                className="h-[13px] w-[13px]"
                alt="Copyright symbol"
                src="/figmaAssets/copyright-symbol-svgrepo-com-1.svg"
              />
              <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
                <span>2026 Restaurants. All Right Reserved. Designed by </span>
                <span className="font-bold">Code Astra Labs</span>
              </p>
            </div>
            <div className="[font-family:'Inter',Helvetica] text-base font-normal leading-[29px] text-[#5c6574]">
              Terms of
              Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
              Policy
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
};