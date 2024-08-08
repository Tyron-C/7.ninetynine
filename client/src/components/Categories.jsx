// import PropTypes from "prop-types";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch.js";

// export default function Categories({ categories }) {
//   const { id } = useParams();
//   const catId = id ? parseInt(id, 10) : null;

//   const { data, loading, error } = useFetch(
//     catId ? `/categories/${catId}` : null
//   );

//   console.log(data);

//   return (
//     <form className="hidden lg:block">
//       <h3 className="sr-only">Categories</h3>
//       <ul
//         role="list"
//         className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
//       >
//         {categories && categories.length > 0 ? (
//           categories.map((category) => (
//             <li key={category.id || category.title}>
//               <a href={category.href}>{category.title}</a>
//             </li>
//           ))
//         ) : (
//           <p>No categories available.</p>
//         )}
//       </ul>
//     </form>
//   );
// }

// // Categories.propTypes = {
// //   categories: PropTypes.array.isRequired,
// // };
