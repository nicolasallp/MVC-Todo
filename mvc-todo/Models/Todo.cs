using System.ComponentModel.DataAnnotations;

namespace mvc_todo.Models
{
	public class Todo
	{
		[Key]
		public int Id { get; set; }
		public string Title { get; set; }

		[DisplayFormat(DataFormatString = "{0:dd-MMM-yy}", ApplyFormatInEditMode = true)]
		public DateTime CreatedDate { get; set; } = DateTime.Now;
	}
}
