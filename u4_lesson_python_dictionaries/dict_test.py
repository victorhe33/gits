import unittest
import main


class Dict_Test(unittest.TestCase):
    test_dict = {
        "first_name": "Joe",
        "last_name": "Schmo",
        "email": "schmo@joe.com",
        "age": 36
    }

    def test_keys(self):
        self.assertEqual(main.list_keys(self.test_dict),
                         self. test_dict.keys())

    def test_values(self):
        values = [x for x in self.test_dict.values()]
        self.assertEqual(main.list_values(self.test_dict),
                         values)

    def test_update(self):
        new_dict = self.test_dict
        new_dict.update({"location": "Budapest", "year": "1989"})
        self.assertEqual(main.update_dict(self.test_dict), new_dict)

    def test_access(self):
        self.assertEqual(main.access_dict(
            self.test_dict), self.test_dict['age'])

    def test_build(self):
        self.assertIsInstance(main.build_dict(), dict)


if __name__ == "__main__":
    unittest.main()
