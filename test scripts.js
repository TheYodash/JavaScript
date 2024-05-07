const companies = [
    {
      name: "Acme Corp",
      ceo: {
        name: "John Doe",
        location: { city: "New York", country: "USA" },
      },
    },
    {
      name: "Beta Ltd",
      ceo: null, // No CEO for this company
    },
    {
      name: "Gamma Inc",
      ceo: { name: "Jane Smith" }, // CEO without location information
    },
    {
        name: "Kojima Productions",
        ceo: { 
            name: "Hideo Kojima",
            location:{city: "Tokyo", country:"Japan"} 
        }
      },
  ];
  
  // Fix the function to safely retrieve the CEO's city or a default message
  function getCeoCity(company) {
    if (company.ceo) {
      if (company.ceo.location) {
        return company.ceo.location.city;
      } else {
        return "No city information available";
      }
    } else {
      return "No city information available";
    }

    // const city = company.ceo?.location?.city || "No city information available";
    // return city

  }

  
  
  console.log(getCeoCity(companies[0])); // Should output "New York"
  console.log(getCeoCity(companies[1])); // Should output "No city information available"
  console.log(getCeoCity(companies[2])); // Should output "No city information available"
  console.log(getCeoCity(companies[3])); // Should output "No city information available"

  