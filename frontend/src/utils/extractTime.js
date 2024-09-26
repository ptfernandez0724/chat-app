function extractTime(dateField) {
    // Convert the MongoDB date field to a JavaScript Date object
    const date = new Date(dateField);
  
    // Extract the hours, minutes, and seconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Format the time (optional: pad with zeroes)
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  
    return formattedTime;
  }

  export default extractTime;