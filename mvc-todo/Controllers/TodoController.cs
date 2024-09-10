using Microsoft.AspNetCore.Mvc;
using mvc_todo.Data;
using mvc_todo.Models;

namespace mvc_todo.Controllers
{
    public class TodoController : Controller
    {
        ApplicationDbContext _db;
        public TodoController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<Todo> todoList = _db.Todos;
            return View(todoList);
        }

        [HttpPost]
        public IActionResult Create(Todo todo)
        {
            if (ModelState.IsValid)
            {
                _db.Todos.Add(todo);
                _db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            Todo todo = _db.Todos.Find(id);
            _db.Todos.Remove(todo);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
