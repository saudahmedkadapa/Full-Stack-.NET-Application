using System;
using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Booking
    {
        public long Id { get; set; }

        [Required]
        public DateTime BookingDate { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string VehicleNumber { get; set; }

        [Required]
        public string SlotNumber { get; set; } // Field to store the assigned slot number
    }
}
