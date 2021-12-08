class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for n in nums:
            self.result += n
        return self

    def subtract(self, num, *nums):
        self.result -= num
        for n in nums:
            self.result -= n
        return self

if __name__ == "__main__":
    md = MathDojo()
    x = md.add(2).add(2,5,1).subtract(3,2).result
    print(x)
    x = md.add(5,7,9,11).subtract(25).subtract(3*4,6,5).add(2*6).result
    print(x)