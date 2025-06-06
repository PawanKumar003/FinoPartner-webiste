import axios from "axios";
export const submitData = async (
  name = "",
  email = "",
  mobile = "",
  business = "",
  sourceId = "",
  slug = ""
) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("mobile", mobile);
  // formData.append("name", name === "" ? "short_enquiry" : name);
  // formData.append("business", business === "" ? "short_enquiry" : business);
  formData.append("name", name);
  formData.append("business", business);
  formData.append("lead_source_id", sourceId);
  formData.append("slug", "https://thefinopartners.com" + slug);

  try {
    const res = await axios.post(
      "https://thefinopartners.com/enquiry/addsform",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    window.location.href = "https://calendly.com/ben-thefinopartners/30min";
  } catch (error) {
    // console.log(error);
  }
};
