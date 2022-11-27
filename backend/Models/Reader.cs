using System.ComponentModel.DataAnnotations;

namespace lab8.Models
{
    public class Reader
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Surname { get; set; } = null!;
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        public string PatronymicName { get; set; } = null!;
        [Required]
        public string Address { get; set; } = null!;

        public int Phone { get; set; }
        public DateTime DateBirth { get; set; }
    }
}
