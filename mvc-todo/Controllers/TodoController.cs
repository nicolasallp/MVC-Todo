using Microsoft.AspNetCore.Mvc;
using mvc_todo.Data;
using mvc_todo.Models;

namespace mvc_todo.Controllers
{
    public class TodoController : Controller
    {
        public static ApplicationDbContext _db;
        public TodoController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            Todo todo = new Todo();
            return View(todo);
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

        public IActionResult Delete(int id)
        {
            Todo todo = _db.Todos.Find(id);
            _db.Todos.Remove(todo);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Edit(int id, Todo todo)
        {
            Todo oldTodo = _db.Todos.Find(id);
            oldTodo.Title = todo.Title;
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
