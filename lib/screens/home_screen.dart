import 'package:alaa_portfolio/widgets/image_with_path.dart';
import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<Offset> _offsetAnimation;
  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 1),
      vsync: this,
    );

    _offsetAnimation = Tween<Offset>(
      begin: const Offset(0.0, 0.0),
      end: const Offset(0.0, -0.03),
    ).animate(_controller)
      ..addStatusListener((status) {
        if (status == AnimationStatus.completed) {
          _controller.reverse();
        } else if (status == AnimationStatus.dismissed) {
          _controller.forward();
        }
      });

    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Colors.grey.shade900,
      body: Row(
        children: [
          Expanded(
            flex: 3,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text("Hello,It's Me",
                    textAlign: TextAlign.left,
                    style: TextStyle(fontSize: 30, color: Colors.white)),
                const Text("Alaa Alhamoud",
                    textAlign: TextAlign.left,
                    style: TextStyle(fontSize: 50, color: Colors.white)),
                Padding(
                  padding: EdgeInsets.only(left: size.width / 5.5),
                  child: Row(
                    children: [
                      const Text("And I'm a ",
                          style: TextStyle(fontSize: 30, color: Colors.white)),
                      Expanded(
                        child: AnimatedTextKit(
                          repeatForever: true,
                          animatedTexts: [
                            TypewriterAnimatedText(
                              cursor: '|',
                              'IT Engineer',
                              speed: const Duration(milliseconds: 100),
                              textStyle: const TextStyle(
                                  color: Colors.cyan,
                                  fontSize: 32.0,
                                  fontWeight: FontWeight.bold),
                            ),
                            // TypewriterAnimatedText(
                            //   speed: const Duration(milliseconds: 100),
                            //   cursor: '|',
                            //   'Ai Developer',
                            //   textStyle: const TextStyle(
                            //       color: Colors.cyan,
                            //       fontSize: 32.0,
                            //       fontWeight: FontWeight.bold),
                            // ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                    top: 10,
                    left: size.width / 6.5,
                    bottom: 10,
                  ),
                  child: Row(
                    children: [
                      ImageWithPathWedget(
                        color: Colors.cyan,
                        imageName: 'facebook.png',
                        onTap: () {},
                        sizeBetween: size.width / 50,
                      ),
                      ImageWithPathWedget(
                        color: Colors.cyan,
                        imageName: 'instagram.png',
                        onTap: () {},
                        sizeBetween: size.width / 50,
                      ),
                      ImageWithPathWedget(
                        color: Colors.cyan,
                        imageName: 'linked_in.png',
                        onTap: () {},
                        sizeBetween: size.width / 50,
                      ),
                      ImageWithPathWedget(
                        color: Colors.cyan,
                        imageName: 'telegram.png',
                        onTap: () {},
                        sizeBetween: size.width / 50,
                      )
                    ],
                  ),
                ),
                GestureDetector(
                  onTap: () {},
                  child: Container(
                    decoration: BoxDecoration(
                      color: Colors.cyan,
                      borderRadius: BorderRadius.circular(200),
                      boxShadow: const [
                        BoxShadow(
                          color: Colors.blue,
                          blurRadius: 6.0,
                          spreadRadius: 2.0,
                        ),
                      ],
                    ),
                    width: 150,
                    height: 50,
                    child: const Center(
                        child: Text(
                      "Download CV",
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    )),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            flex: 2,
            child: SlideTransition(
              position: _offsetAnimation,
              child: Container(
                height: size.height / 2,
                width: size.width / 2,
                decoration: const BoxDecoration(
                  image: DecorationImage(
                    fit: BoxFit.contain,
                    image: AssetImage(
                      'assets/images/travelIti.png',
                    ),
                  ),
                  color: Colors.transparent,
                  shape: BoxShape.circle,
                ),
              ),
            ),
          )
        ],
      ),
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
