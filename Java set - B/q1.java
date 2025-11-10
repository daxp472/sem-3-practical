class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator o = new Calculator();
        System.out.println("Sum " + o.add(5, 3));
        System.out.println("Sum " + o.add(5.5, 4.5));
        System.out.println("Sum " + o.add(2, 3, 4));
    }
}