export const handleLeadSquared = async (name, email, phone, officeType, moveIn, noSeats, location, city) => {
    try {
      const response = await fetch(
        "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$r455297ea39e8318d5fbc79136360e24d&secretKey=2fa22cab320e8673c1d9db868fbe02d753e48eda",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              "Attribute": "Source",
              "Value": "Spacite"
              },
            {
            "Attribute": "FirstName",
            "Value": name
            },
            {
            "Attribute": "EmailAddress",
            "Value": email
            },
            {
            "Attribute": "Phone",
            "Value": phone
            },
            {
            "Attribute": "mx_Type_of_Space",
            "Value": officeType
            },
             {
            "Attribute": "mx_Move_In_Date",
            "Value": moveIn
            },
             {
            "Attribute": "mx_No_of_Seats",
            "Value": noSeats
            },
             {
            "Attribute": "mx_City",
            "Value": city
            },
             {
            "Attribute": "mx_Page_Url",
            "Value": location
            },
            {
           "Attribute": "mx_Space_Type",
           "Value": "Web Coworking"
           }
            ]),
        }
      );
  
      const responseData = await response.json();

      if (responseData.Status === "Success") {
         console.log("Success!")
      } else {
        console.error(responseData.ExceptionMessage);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };