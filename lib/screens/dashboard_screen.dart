import 'package:alaa_portfolio/screens/about_me_screen.dart';
import 'package:alaa_portfolio/screens/home_screen.dart';
import 'package:alaa_portfolio/screens/my_projects_screen.dart';
import 'package:alaa_portfolio/screens/skills_screen.dart';
import 'package:alaa_portfolio/widgets/action_widget.dart';
import 'package:flutter/material.dart';

class DashBoardScreen extends StatefulWidget {
  const DashBoardScreen({super.key});

  @override
  State<DashBoardScreen> createState() => _DashBoardScreenState();
}

class _DashBoardScreenState extends State<DashBoardScreen> {
  int value = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.grey.shade900,
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.grey.shade900,
          actions: [
            ActionWidget(
              text: "Home",
              ontap: () {
                updateIndex(index: 0);
              },
            ),
            ActionWidget(
              text: "About Me",
              ontap: () {
                updateIndex(index: 1);
              },
            ),
            ActionWidget(
              text: "Skills",
              ontap: () {
                updateIndex(index: 2);
              },
            ),
            ActionWidget(
              text: "Projects",
              ontap: () {
                updateIndex(index: 3);
              },
            ),
          ],
        ),
        body: IndexedStack(
          index: value,
          children: const [
            MyHomePage(),
            AboutMeScreen(),
            SkillsScreen(),
            MyProjectsScreen()
          ],
        ));
  }

  void updateIndex({required int index}) {
    setState(() {
      value = index;
    });
  }
}
