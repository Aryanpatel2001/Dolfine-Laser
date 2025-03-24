"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Branch data
const branches = [
  {
    id: 1,
    name: "Canada Branch",
    address: "74 geranium crescent Brampton L6Y1N8, Canada.",
    phone: "+1 XXX-XXX-XXXX",
    type: "international",
  },
  {
    id: 2,
    name: "Dubai Branch",
    address: "103, Al kaltham Building, Gold Souq Deira Dubai 26800",
    phone: "+971 XX-XXX-XXXX",
    type: "international",
  },
  {
    id: 3,
    name: "U.S.A Branch",
    address: "CRA 26 12 B 18 bogata Colombia U.S.A 110111",
    phone: "+1 XXX-XXX-XXXX",
    type: "international",
  },
  {
    id: 4,
    name: "Banglore Branch",
    address: "No: 57/94, Dr: Rajakumar road, Prakashnagar, Bangalore: 560021",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 5,
    name: "Delhi Branch",
    address:
      "32/2, Second floor, Zulfe Bengal, behind Bikanerwala, Industrial Area, Dilshad Garden, Delhi, 110095",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 6,
    name: "Chennai Branch",
    address:
      "WEGROW TECHNOLOGIES, 20, MOORTHY NAGAR, 2ND MAIN ROAD PADI, CHENNAI - 600050",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 7,
    name: "Surat Branch",
    address:
      "305/306/307, Ambey Valley Arcade, Nr. VIP Circle, Utran, Surat-394510, Gujarat, India",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 8,
    name: "Pune Branch",
    address:
      "3, Prarabdha Society, S.No. 63/1 F2 A, Pune-Satara Road, Parvati Maharashtra - 411009, India",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 9,
    name: "Jaipur Branch",
    address:
      "Shop no 140, pitliyonka chowk, Johari bazar, Jaipur, Rajashthan- 302003",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 10,
    name: "Rajkot Branch",
    address:
      "shree Chamunda Krupa, 3/8 vaniya vadi corner, near bhaktinagar circle, Rajkot - 360002",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 11,
    name: "Mumbai Branch",
    address:
      "35, Kanal Industrial Estate, Daulat Nagar Road No.6, Borivali East, Mumbai - 400066",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 12,
    name: "Coimbatore Branch",
    address:
      "SRB ENGINEERINGS, 6-B,G.J.Chandran Complex, 11,Head Quarters Road, Uppilipalayam, Coimbatore -641018",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 13,
    name: "Hyderabad Branch",
    address:
      "Flat no-09, Blockno-51, Rajiv gruha kalpa apartments, papireddy colony, chandanagar, serilingampally, Hyderabad-500019",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 14,
    name: "Kolkata Branch",
    address:
      "30, Micheal Madhusudan sarani, khidirpore, kolkata,West Bengal 700023",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
  {
    id: 15,
    name: "Indore Branch",
    address:
      "14-15 JAVRA COMPOUND JUSTIS OZA COMPLEX, NR.BHARAT GAS OFFICE INDORE- 452008",
    phone: "+91 XXXXX-XXXXX",
    type: "india",
  },
];

interface BranchLocationsProps {
  filter: "india" | "international" | "all";
}

export default function BranchLocations({ filter }: BranchLocationsProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBranches = branches.filter((branch) => {
    // Filter by type
    if (filter === "india" && branch.type !== "india") return false;
    if (filter === "international" && branch.type !== "international")
      return false;

    // Filter by search term
    if (
      searchTerm &&
      !branch.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !branch.address.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Search branches..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredBranches.map((branch) => (
          <motion.div
            key={branch.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {branch.name}
              </h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-600 text-sm">{branch.address}</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View Map
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredBranches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600">
            No branches found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
