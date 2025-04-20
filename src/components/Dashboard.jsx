// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaClipboardList, FaExclamationTriangle, FaBook, FaNewspaper, FaUser, FaShieldAlt } from "react-icons/fa"
// import { getUserComplaints, fetchLatestUpdates } from "../utils/api"
// import { useAuth } from "../contexts/AuthContext"

// function Dashboard() {
//   const [complaints, setComplaints] = useState([])
//   const [updates, setUpdates] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const { user } = useAuth()

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       setIsLoading(true)
//       setError(null)

//       try {
//         // Fetch user complaints
//         const complaintsResponse = await getUserComplaints()
//         setComplaints(complaintsResponse.data || [])

//         // Fetch latest updates
//         const updatesResponse = await fetchLatestUpdates({ limit: 3 })
//         setUpdates(updatesResponse.data || [])
//       } catch (err) {
//         console.error("Error fetching dashboard data:", err)
//         setError("Failed to load dashboard data. Please try again later.")
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchDashboardData()
//   }, [])

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "submitted":
//         return "status-submitted"
//       case "under_review":
//         return "status-review"
//       case "in_progress":
//         return "status-progress"
//       case "resolved":
//         return "status-resolved"
//       case "closed":
//         return "status-closed"
//       case "rejected":
//         return "status-rejected"
//       default:
//         return ""
//     }
//   }

//   const formatStatus = (status) => {
//     return status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
//   }

//   return (
//     <div className="dashboard-page">
//       <section className="dashboard-header">
//         <div className="container">
//           <h1>Welcome, {user?.name || "User"}</h1>
//           <p>Manage your complaints and stay updated on cybersecurity information</p>
//         </div>
//       </section>

//       <section className="dashboard-content">
//         <div className="container">
//           {isLoading ? (
//             <div className="loading-container">
//               <div className="loading-spinner"></div>
//               <p>Loading your dashboard...</p>
//             </div>
//           ) : error ? (
//             <div className="error-container">
//               <FaExclamationTriangle />
//               <p>{error}</p>
//               <button className="btn-primary" onClick={() => window.location.reload()}>
//                 Try Again
//               </button>
//             </div>
//           ) : (
//             <div className="dashboard-grid">
//               <div className="dashboard-main">
//                 <div className="dashboard-card">
//                   <div className="card-header">
//                     <h2>
//                       <FaClipboardList /> Your Complaints
//                     </h2>
//                     <Link to="/complaint-form" className="btn-primary btn-sm">
//                       File New Complaint
//                     </Link>
//                   </div>

//                   {complaints.length === 0 ? (
//                     <div className="empty-state">
//                       <p>You haven't filed any complaints yet.</p>
//                       <Link to="/complaint-form" className="btn-primary">
//                         File Your First Complaint
//                       </Link>
//                     </div>
//                   ) : (
//                     <div className="complaints-list">
//                       {complaints.map((complaint) => (
//                         <div key={complaint._id} className="complaint-item">
//                           <div className="complaint-header">
//                             <h3>
//                               {complaint.incidentDetails.incidentType
//                                 .replace(/_/g, " ")
//                                 .replace(/\b\w/g, (l) => l.toUpperCase())}
//                             </h3>
//                             <span className={`complaint-status ${getStatusClass(complaint.status)}`}>
//                               {formatStatus(complaint.status)}
//                             </span>
//                           </div>
//                           <div className="complaint-details">
//                             <p>
//                               <strong>Reference:</strong> {complaint.referenceNumber}
//                             </p>
//                             <p>
//                               <strong>Date:</strong> {new Date(complaint.createdAt).toLocaleDateString()}
//                             </p>
//                           </div>
//                           <div className="complaint-actions">
//                             <Link to={`/complaints/${complaint._id}`} className="btn-outline btn-sm">
//                               View Details
//                             </Link>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <div className="dashboard-card">
//                   <div className="card-header">
//                     <h2>
//                       <FaNewspaper /> Latest Updates
//                     </h2>
//                     <Link to="/updates" className="btn-link">
//                       View All
//                     </Link>
//                   </div>

//                   <div className="updates-list">
//                     {updates.map((update) => (
//                       <div key={update._id} className="update-item">
//                         <div className="update-date">{new Date(update.publishedAt).toLocaleDateString()}</div>
//                         <h3>{update.title}</h3>
//                         <p>{update.summary}</p>
//                         <Link to={`/updates/${update._id}`} className="read-more">
//                           Read More
//                         </Link>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="dashboard-sidebar">
//                 <div className="dashboard-card user-profile">
//                   <div className="user-avatar">
//                     <FaUser />
//                   </div>
//                   <h3>{user?.name}</h3>
//                   <p>{user?.email}</p>
//                   <div className="profile-actions">
//                     <Link to="/profile" className="btn-outline btn-block">
//                       Edit Profile
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="dashboard-card quick-links">
//                   <h3>Quick Links</h3>
//                   <ul>
//                     <li>
//                       <Link to="/complaint-form">
//                         <FaClipboardList /> File a Complaint
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/indian-laws">
//                         <FaBook /> Cyber Laws
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/tutorials">
//                         <FaShieldAlt /> Security Tutorials
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="dashboard-card emergency-contact">
//                   <h3>Emergency Contact</h3>
//                   <p>Cyber Crime Helpline:</p>
//                   <a href="tel:1930" className="emergency-number">
//                     1930
//                   </a>
//                   <p>National Cyber Crime Reporting Portal:</p>
//                   <a
//                     href="https://cybercrime.gov.in/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="emergency-link"
//                   >
//                     cybercrime.gov.in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Dashboard
