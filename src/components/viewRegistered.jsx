import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from "../firebase";

const ViewRegistered = () => {
  const [registrations, setRegistrations] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchPaidRegistrations = async () => {
      try {
        const q = query(collection(db, "registered"), where("paymentStatus", "==", true));
        const querySnapshot = await getDocs(q);
        const dataList = querySnapshot.docs.map((doc) => doc.data());
        
        // Sort registrations by college name
        const sortedData = dataList.sort((a, b) => a.collegeName.localeCompare(b.collegeName));
        setRegistrations(sortedData);
      } catch (error) {
        alert("Error fetching data: ", error);
      }
    };
    fetchPaidRegistrations();
  }, [db]);

  return (
    <div className="w-full p-5 md:p-15 flex justify-center items-center">
        <div className="p-4 max-w-2xl bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Approved Registrations</h2>
        {registrations.length > 0 ? (
            <ul className="space-y-4">
            {registrations.map((registration, index) => (
                <li key={index} className="border p-4 rounded-lg shadow">
                <p className="font-bold">College: {registration.collegeName}</p>
                <p className="text-sm text-gray-600">Date: {new Date(registration.createdAt.seconds * 1000).toLocaleDateString()}</p>
                <p className="text-sm">Event: {registration.event}</p>
                <p className="text-sm font-bold">Team Name: {registration.teamName}</p>
                <p className="text-sm">Transaction ID: {registration.transactionId}</p>
                <div className="mt-2">
                    <p className="font-bold">Players:</p>
                    <ul className="list-disc pl-5">
                    {registration.players.map((player, i) => (
                        <li key={i} className="text-sm">
                        {player.name} - {player.email} - {player.phone}
                        </li>
                    ))}
                    </ul>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <p>No paid registrations found.</p>
        )}
        </div>
    </div>
  );
};

export default ViewRegistered;
