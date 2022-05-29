import unittest
from main import check_gpa


class TestGpa(unittest.TestCase):
    def test_gpa_perfect(self):
        self.assertEqual(
            check_gpa(3.8), 'Automatically Accepted')

    def test_gpa_average(self):
        self.assertEqual(check_gpa(3.4), 'Needs In Person Interview')

    def test_gpa_below(self):
        self.assertEqual(check_gpa(2.5), 'Not Accepted')


if __name__ == '__main__':
    unittest.main()
